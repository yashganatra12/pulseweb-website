import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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
      to: "info@pulsewebtechnologies.com",
      replyTo: email,
      subject: `New Inquiry from ${name} — ${service || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6C3CE1, #00D4FF); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: white;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">PulseWeb Technologies Website</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #6C3CE1;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${phone}</td>
              </tr>` : ""}
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${company}</td>
              </tr>` : ""}
              ${service ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${service}</td>
              </tr>` : ""}
              ${budget ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${budget}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 12px 0; color: #888; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #fff; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 30px; background: #111; text-align: center; font-size: 12px; color: #666;">
            This email was sent from the PulseWeb Technologies contact form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
