import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_REQUEST_BYTES = 10_000;

const KIM_JESTEM_LABELS: Record<string, string> = {
  "firma-lab": "Firma - zgłoszenie na LAB",
  "firma-inside": "Firma - POST-CI INSIDE",
  partner: "Partner instytucjonalny",
  specjalista: "Specjalista",
  inne: "Inne",
};

type ContactPayload = {
  imie?: unknown;
  email?: unknown;
  wiadomosc?: unknown;
  kimJestem?: unknown;
  firma?: unknown;
  startedAt?: unknown;
};

function readText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function readMessage(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, MAX_MESSAGE_LENGTH);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Nieprawidlowy format formularza." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { error: "Wiadomosc jest za dluga." },
      { status: 413 }
    );
  }

  try {
    const body = (await request.json()) as ContactPayload;

    const honeypot = readText(body.firma, 120);
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const submitTime =
      typeof body.startedAt === "number" ? Date.now() - body.startedAt : null;
    if (submitTime !== null && submitTime >= 0 && submitTime < 2500) {
      return NextResponse.json({ ok: true });
    }

    const imie = readText(body.imie, MAX_NAME_LENGTH).replace(/[\r\n]/g, " ");
    const email = readText(body.email, MAX_EMAIL_LENGTH).toLowerCase();
    const wiadomosc = readMessage(body.wiadomosc);
    const kimJestemKey = readText(body.kimJestem, 40);
    const kimJestem = KIM_JESTEM_LABELS[kimJestemKey] || "Nie podano";

    if (!imie || !email || !wiadomosc) {
      return NextResponse.json(
        { error: "Uzupelnij imie, e-mail i wiadomosc." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Podaj poprawny adres e-mail." },
        { status: 400 }
      );
    }
    if (wiadomosc.length < 10) {
      return NextResponse.json(
        { error: "Napisz prosze kilka slow wiecej." },
        { status: 400 }
      );
    }
    if (!process.env.RESEND_API_KEY || !process.env.KONTAKT_TO) {
      console.error("Contact route missing env configuration");
      return NextResponse.json(
        { error: "Formularz nie jest jeszcze skonfigurowany." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.KONTAKT_FROM || "onboarding@resend.dev",
      to: process.env.KONTAKT_TO!,
      replyTo: email,
      subject: `POST-CI - ${kimJestem} - ${imie}`,
      text: `Kim jest: ${kimJestem}\nImie: ${imie}\nE-mail: ${email}\n\nWiadomosc:\n${wiadomosc}`,
    });

    if (error) {
      console.error(
        "Resend send failed:",
        error instanceof Error ? error.message : "unknown error"
      );
      return NextResponse.json(
        { error: "Nie udalo sie wyslac wiadomosci. Sprobuj ponownie." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Nieprawidlowy format formularza." },
        { status: 400 }
      );
    }

    console.error(
      "Contact route failed:",
      error instanceof Error ? error.message : "unknown error"
    );
    return NextResponse.json(
      { error: "Cos poszlo nie tak po stronie serwera." },
      { status: 500 }
    );
  }
}
