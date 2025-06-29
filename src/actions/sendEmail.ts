'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    message: string;
    token: string;
}) {
    const { name, email, message, token } = formData;

    const verifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        {
            method: 'POST',
        }
    );

    const captchaResult = await verifyRes.json();

    if (!captchaResult.success) {
        return { success: false, error: 'Captcha verification failed' };
    }

    try {
        const data = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
            to: [process.env.EMAIL_TO || 'rubenoalvarado@gmail.com'],
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
                <h2>New contact message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}