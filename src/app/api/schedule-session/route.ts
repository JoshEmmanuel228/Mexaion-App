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

    // 1. Email to Admin (YOU)
    // Note: 'onboarding@resend.dev' works for testing. 
    // Once you verify a domain (e.g., citas@mexaion.com), change 'from' field.
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mexaion018@gmail.com',
      subject: `Nueva Solicitud: ${email} ${callNow ? '(URGENTE)' : ''}`,
      html: `
        <div>
            <h1>Nueva Solicitud de Cita</h1>
            <p><strong>Cliente:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Fecha:</strong> ${new Date(sessionDate).toLocaleString()}</p>
            <p><strong>Urgente (30 min):</strong> ${callNow ? 'SÍ' : 'No'}</p>
            <hr />
            <p><strong>Negocio:</strong> ${businessInfo}</p>
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
