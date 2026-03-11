import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `PulseWeb Website <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6C3CE1, #00D4FF); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: white;">New Newsletter Subscriber</h1>
            <p style="margin: 5px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">PulseWeb Technologies Blog</p>
          </div>
          <div style="padding: 30px; text-align: center;">
            <p style="color: #888; font-size: 14px; margin: 0 0 8px;">A new user has subscribed to the newsletter:</p>
            <p style="font-size: 20px; margin: 0;">
              <a href="mailto:${email}" style="color: #6C3CE1; text-decoration: none; font-weight: 600;">${email}</a>
            </p>
          </div>
          <div style="padding: 20px 30px; background: #111; text-align: center; font-size: 12px; color: #666;">
            This email was sent from the PulseWeb Technologies blog newsletter form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter email error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
