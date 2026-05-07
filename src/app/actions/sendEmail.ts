"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Inex Labs <notifications@contact.inexlabs.com>',
      to: ['hello@inexlabs.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      replyTo: formData.email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 40px; border-radius: 20px;">
          <h2 style="color: #fff; text-transform: uppercase; letter-spacing: 0.2em; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;">New Project Inquiry</h2>
          
          <div style="margin-top: 30px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px;">Client Name</p>
            <p style="font-size: 18px; margin-top: 0;">${formData.name}</p>
          </div>

          <div style="margin-top: 20px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px;">Email Address</p>
            <p style="font-size: 18px; margin-top: 0;">${formData.email}</p>
          </div>

          <div style="margin-top: 20px;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px;">Phone Number</p>
            <p style="font-size: 18px; margin-top: 0;">${formData.phone}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px;">Message Brief</p>
            <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">${formData.message}</p>
          </div>

          <div style="margin-top: 40px; font-size: 10px; color: #444; text-align: center; text-transform: uppercase; letter-spacing: 0.3em;">
            Sent via Inex Labs Portfolio
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Submission error:", err);
    return { success: false, error: err.message };
  }
}
