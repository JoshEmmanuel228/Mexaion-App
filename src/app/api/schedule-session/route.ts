import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, phone, callNow, sessionDate, businessInfo } = data;

    // Check API Key
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Error de configuración: Falta API Key de Resend' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const cleanPhone = phone.replace(/\D/g, ''); // Remove non-digits for WhatsApp link

    // 1. Email to Admin (YOU)
    // Note: 'onboarding@resend.dev' works for testing. 
    // Once you verify a domain (e.g., citas@mexaion.com), change 'from' field.
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mexaion018@gmail.com',
      subject: `Nueva Solicitud: ${email} ${callNow ? '(URGENTE)' : ''}`,
      html: `
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
            `
    });

    if (adminEmail.error) {
      console.error("Resend Admin Error:", adminEmail.error);
      throw new Error("Fallo al enviar correo al admin");
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

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: `Error interno: ${error.message}` },
      { status: 500 }
    );
  }
}
