import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email, phone, callNow, sessionDate, businessInfo } = data;

        // Validate environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return NextResponse.json(
                { error: 'Error de configuración del servidor: Faltan variables de entorno de correo.' },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
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

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
