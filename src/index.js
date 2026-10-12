import { EmailMessage } from "cloudflare:email";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
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

    if (!name || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email) || message.length < 5) {
      return json({ ok: false, error: "Add your name, a valid email and a short message." }, 400);
    }

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\n\n${message}\n`;
    const raw = [
      "From: Humanward Labs Website <website@humanwardlabs.com>",
      `To: ${env.CONTACT_TO}`,
      `Reply-To: ${name} <${email}>`,
      `Subject: New project inquiry from ${name}`,
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
