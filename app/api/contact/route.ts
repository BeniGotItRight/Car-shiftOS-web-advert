import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const SUBJECTS = [
  "Platform Deployment",
  "Custom Feature Request",
  "Partnership Inquiry",
  "Technical Support",
];

const MAX = { name: 100, email: 200, message: 3000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort per-instance limiter: stops casual spam without needing a database.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const subject = clean(body.subject, 100);
  const message = clean(body.message, MAX.message);

  if (!name || !message || !EMAIL_RE.test(email) || !SUBJECTS.includes(subject)) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Messaging is temporarily unavailable." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "carshiftos@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Car ShiftOS <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `${subject}: ${name}`,
    text: `New message from the carshiftos.co.ke contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  }

  // The confirmation email to the visitor only works once a domain is verified in Resend.
  if (process.env.CONTACT_FROM_EMAIL) {
    const { error: replyError } = await resend.emails.send({
      from,
      to: email,
      subject: "We got your message",
      text: `Hi ${name},\n\nThanks for contacting Car ShiftOS. We received your message and will get back to you soon.\n\nIf it's urgent, call or WhatsApp us on 0732 009 268.\n\nCar ShiftOS`,
    });
    if (replyError) console.error("Confirmation email failed:", replyError);
  }

  return NextResponse.json({ ok: true });
}
