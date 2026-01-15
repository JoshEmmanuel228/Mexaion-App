import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, phone, callNow, sessionDate, businessInfo } = data;

    // --- SHARED HTML TEMPLATE ---
    const cleanPhone = phone.replace(/\D/g, '');
    const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #06b6d4;">Nueva Solicitud de Cita</h1>
            
            <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 5px 0;"><strong>Cliente (Email):</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${phone}</p>
                <p style="margin: 5px 0;"><strong>Fecha Preferida:</strong> ${new Date(sessionDate).toLocaleString()}</p>
                <p style="margin: 5px 0;"><strong>Urgencia (30 min):</strong> ${callNow ? '<span style="color: red; font-weight: bold;">SÍ URGE</span>' : 'No'}</p>
            </div>

            <h3>Acciones Rápidas:</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <a href="https://wa.me/${cleanPhone}" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    WhatsApp
                </a>
                <a href="tel:${phone}" style="background-color: #06b6d4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Llamar
                </a>
                <a href="mailto:${email}" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Responder Correo
                </a>
            </div>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e5e7eb;" />
            
            <h3>Información del Negocio:</h3>
            <p style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                ${businessInfo}
            </p>
        </div>
        `;

    // --- STRATEGY SELECTION ---
    // Use Resend in PRODUCTION (Render)
    // Use Nodemailer in DEVELOPMENT (Localhost)
    const useResend = process.env.NODE_ENV === 'production' && !!process.env.RESEND_API_KEY;

    console.log(`Sending email via: ${useResend ? 'RESEND (Production)' : 'NODEMAILER (Local)'}`);

    if (useResend) {
      // === RESEND STRATEGY ===
      if (!process.env.RESEND_API_KEY) {
        console.error('Missing RESEND_API_KEY');
        return NextResponse.json(
          { error: 'Error de configuración: Falta API Key de Resend' },
          { status: 500 }
        );
      }
      const resend = new Resend(process.env.RESEND_API_KEY);

      const adminEmail = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mexaion018@gmail.com',
        subject: `Nueva Solicitud: ${email} ${callNow ? '(URGENTE)' : ''}`,
        html: emailHtml
      });

      if (adminEmail.error) {
        console.error("Resend Error:", adminEmail.error);
        throw new Error("Error enviando correo con Resend");
      }

      // 2. Email to Client (Only works if you verified Domain or if sending to yourself in test mode)
      // In free test mode, you can usually only send TO the registered email. 
      // So this might fail for real clients until you verify domain 'mexaion.com' on Resend.
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Recibimos tu solicitud - MEXAion',
          html: `
                      <div>
                          <h1>¡Hola!</h1>
                          <p>Hemos recibido tu solicitud para una sesión estratégica.</p>
                          <p>Te contactaremos pronto al: <strong>${phone}</strong></p>
                          <p>Atte: El equipo de MEXAion</p>
                      </div>
                          `
        });
      } catch (clientError) {
        // Don't block success if client email fails (common in test mode)
        console.warn("Client email failed (likely due to unverified domain in test mode):", clientError);
      }

    } else {
      // === NODEMAILER STRATEGY (Localhost) ===
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Faltan variables EMAIL_USER / EMAIL_PASS para enviar correos locales.');
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail', // Simple configuration for local
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'mexaion018@gmail.com',
        subject: `Nueva Solicitud: ${email} ${callNow ? '(URGENTE)' : ''}`,
        html: emailHtml
      });

      // Optional: Send copy to client in local mode too if desired
      // (Skipping based on simplicity, but can be added)
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: `Error enviando correo: ${error.message}` },
      { status: 500 }
    );
  }
}
