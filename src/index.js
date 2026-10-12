import { EmailMessage } from "cloudflare:email";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

// Home page: HTML for browsers, Markdown for agents that ask for it (Accept: text/markdown).
async function page(request, env, url) {
  const accept = request.headers.get("accept") || "";
  const md = url.pathname === "/index.md" || /text\/markdown/i.test(accept);
  const res = await env.ASSETS.fetch(new Request(new URL(md ? "/index.md" : "/", url), request));
  const out = new Response(res.body, res);
  if (md && res.ok) out.headers.set("content-type", "text/markdown; charset=utf-8");
  out.headers.append("vary", "Accept");
  out.headers.set("link", md
    ? '<https://humanwardlabs.com/>; rel="canonical"'
    : '</index.md>; rel="alternate"; type="text/markdown", </llms.txt>; rel="describedby"; type="text/plain"');
  return out;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.md") return page(request, env, url);
    if (url.pathname !== "/api/contact") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return json({ ok: false, error: "Method not allowed." }, 405);

    let d;
    try { d = await request.json(); } catch { return json({ ok: false, error: "Send the form again." }, 400); }
    if (d.website) return json({ ok: true }); // spam trap

    const s = (v, n) => String(v || "").trim().slice(0, n);
    const oneLine = (v) => v.replace(/[\r\n<>"]+/g, " ").trim();
    const name = oneLine(s(d.name, 200));
    const email = s(d.email, 200);
    const company = oneLine(s(d.company, 200));
    const message = s(d.message, 5000);
    const services = (Array.isArray(d.services) ? d.services : []).map((x) => oneLine(s(x, 60))).filter(Boolean).slice(0, 6);
    const timeline = oneLine(s(d.timeline, 60));

    if (!name || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email) || message.length < 5) {
      return json({ ok: false, error: "Add your name, a valid email and a short message." }, 400);
    }

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nNeeds: ${services.join(", ") || "-"}\nTimeline: ${timeline || "-"}\n\nChallenge:\n${message}\n`;
    const raw = [
      "From: Humanward Labs Website <website@humanwardlabs.com>",
      `To: ${env.CONTACT_TO}`,
      `Reply-To: ${name} <${email}>`,
      `Subject: New project: ${name}${company ? " at " + company : ""}`,
      `Message-ID: <${crypto.randomUUID()}@humanwardlabs.com>`,
      `Date: ${new Date().toUTCString()}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      body,
    ].join("\r\n");

    try {
      await env.CONTACT.send(new EmailMessage("website@humanwardlabs.com", env.CONTACT_TO, raw));
      return json({ ok: true });
    } catch (e) {
      return json({ ok: false, error: "Your message didn't send. Email info@humanwardlabs.com directly." }, 500);
    }
  },
};
