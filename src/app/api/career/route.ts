import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;

    if (!name || !email || !position) {
      return NextResponse.json(
        { error: "Name, email, and position are required." },
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

    const attachments = [];
    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      });
    }

    const mailOptions = {
      from: `PulseWeb Website <${process.env.SMTP_EMAIL}>`,
      to: "info@pulsewebtechnologies.com",
      replyTo: email,
      subject: `New Job Application — ${position} — ${name}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6C3CE1, #00D4FF); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: white;">New Job Application</h1>
            <p style="margin: 5px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">PulseWeb Technologies Careers</p>
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
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Position</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-weight: 600;">${position}</td>
              </tr>
              ${experience ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Experience</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff;">${experience}</td>
              </tr>` : ""}
              ${message ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; vertical-align: top;">Cover Note</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
              ${cvFile ? `<tr>
                <td style="padding: 12px 0; color: #888; vertical-align: top;">CV/Resume</td>
                <td style="padding: 12px 0; color: #fff;">${cvFile.name} (attached)</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="padding: 20px 30px; background: #111; text-align: center; font-size: 12px; color: #666;">
            This email was sent from the PulseWeb Technologies careers page.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application email error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
