import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, zip, message, device, model, issue } = body;

    const to = "alphafixinc@gmail.com";
    const from = process.env.GMAIL_USER!;
    const password = process.env.GMAIL_PASS!;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: from,
        pass: password,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "New Quote Request from Richmond - Alpha-Fix",
      html: `
        <h2>Quote Request From Richmond</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <p><strong>Message:</strong> ${message}</p>
         <hr />
        <p><strong>Device:</strong> ${device}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Issue:</strong> ${issue}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email failed:", err?.message || err);
    return NextResponse.json(
      { message: "Email sending failed", error: err?.message },
      { status: 500 }
    );
  }
}