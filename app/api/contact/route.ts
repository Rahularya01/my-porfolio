import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Create a transporter (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your email provider's SMTP host
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "aryarahul819@gmail.com",
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #fec00c; border-bottom: 2px solid #fec00c; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px; border-left: 4px solid #fec00c;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from your portfolio contact form. 
              Reply directly to this email to respond to ${validatedData.name}.
            </p>
          </div>
        </div>
      `,
      replyTo: validatedData.email,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #fec00c; border-bottom: 2px solid #fec00c; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${validatedData.name},</p>
          
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <p>Best regards,<br>Rahul</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f8ff; border-radius: 8px; border-left: 4px solid #fec00c;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This is an automated confirmation. Please don't reply to this email.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
