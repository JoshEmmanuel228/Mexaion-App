import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, phone, callNow, sessionDate, businessInfo } = data;

    console.log("Attempting to send email. Env check - User:", !!process.env.EMAIL_USER, "Pass:", !!process.env.EMAIL_PASS);

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { error: 'Error de configuración del servidor: Faltan variables de entorno de correo.' },
        { status: 500 }
      );
    }

    // Create transporter - Force IPv4 to avoid IPv6 timeouts in cloud envs
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Force IPv4 and increase timeout
      tls: {
        ciphers: 'SSLv3'
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    // 1. Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mexaion018@gmail.com', // Admin email
      subject: `Nueva Solicitud de Sesión Estratégica${callNow ? ' - LLAMADA URGENTE (30 MIN)' : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #06b6d4;">Nueva Solicitud de Sesión Estratégica</h2>
          <p>Un cliente ha solicitado una sesión a través del sitio web.</p>
          
          <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; border: 1px solid #ccfbf1;">
            <p><strong>Cliente:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Fecha Preferida:</strong> ${new Date(sessionDate).toLocaleString()}</p>
            <p><strong>Llamada en 30 min:</strong> ${callNow ? '<span style="color: red; font-weight: bold;">SÍ - URGENTE</span>' : 'No'}</p>
          </div>

          <h3 style="color: #06b6d4;">Información del Negocio:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${businessInfo.replace(/\n/g, '<br>')}
          </p>
        </div>
      `,
    };

    // 2. Email to Client (Confirmation)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Client email
      subject: 'Confirmación de Solicitud - MEXAion',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #06b6d4;">¡Solicitud Recibida!</h2>
          <p>Hola,</p>
          <p>Hemos recibido tu solicitud para una sesión estratégica.</p>
          <p>Nuestro equipo revisará tu información y te contactaremos pronto al número <strong>${phone}</strong>.</p>
          
          ${callNow ? '<p><strong>Nota:</strong> Has solicitado una llamada urgente en 30 minutos. Haremos lo posible por contactarte de inmediato.</p>' : ''}

          <p>Detalles de tu cita solicitada: ${new Date(sessionDate).toLocaleString()}</p>
          
          <br>
          <p>Atentamente,<br><strong>El equipo de MEXAion</strong></p>
        </div>
      `,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: `Error enviando correo: ${error.message || 'Error desconocido'}` },
      { status: 500 }
    );
  }
}
