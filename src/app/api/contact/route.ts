import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  industry: z.string().optional(),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(5),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  // Honeypot triggered — silently accept without processing
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? "kontakt@birchprime.rs";
  const from = process.env.CONTACT_FROM_EMAIL ?? "noreply@birchprime.mk";

  const subject = `Ново барање — ${parsed.data.name}${parsed.data.company ? ` (${parsed.data.company})` : ""}`;
  const body = [
    `Име: ${parsed.data.name}`,
    `Компанија: ${parsed.data.company ?? "—"}`,
    `Е-пошта: ${parsed.data.email}`,
    `Телефон: ${parsed.data.phone ?? "—"}`,
    `Индустрија: ${parsed.data.industry ?? "—"}`,
    `Производ: ${parsed.data.product ?? "—"}`,
    `Количина: ${parsed.data.quantity ?? "—"}`,
    "",
    "Порака:",
    parsed.data.message,
  ].join("\n");

  if (!apiKey) {
    console.log("[contact] no RESEND_API_KEY set — logging payload only");
    console.log("[contact]", { subject, body });
    return NextResponse.json({ ok: true, mode: "dev-log" });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: parsed.data.email,
      subject,
      text: body,
    }),
  });

  if (!res.ok) {
    console.error("[contact] resend failed", await res.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
