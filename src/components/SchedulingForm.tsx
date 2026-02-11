'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SchedulingForm() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        callNow: false,
        sessionDate: '',
        businessInfo: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/schedule-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error detallado del servidor:', errorData);
                throw new Error(errorData.error || 'Error al enviar la solicitud.');
            }

            setStatus('success');
            setFormData({
                email: '',
                phone: '',
                callNow: false,
                sessionDate: '',
                businessInfo: ''
            });
        } catch (error) {
            console.error('Error en el envío del formulario:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Hubo un problema al agendar. Por favor intenta de nuevo o contáctanos directamente.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // Type checking for checkbox specifically
        if (type === 'checkbox') {
            const checkbox = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-pane p-8 text-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">¡Solicitud Recibida!</h3>
                <p className="text-blue-200">Hemos recibido tus datos. Nos pondremos en contacto contigo brevemente para confirmar tu sesión estratégica.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-cyan-400 hover:text-cyan-300 underline"
                >
                    Agendar otra sesión
                </button>
            </motion.div>
        );
    }

    return (
        <div className="glass-pane p-8 w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Agenda tu Sesión Estratégica</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-blue-200 font-semibold block">Correo Electrónico</label>
                        <input
                            suppressHydrationWarning

                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-cyan-800 rounded-lg p-3 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                            placeholder="nombre@empresa.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-blue-200 font-semibold block">Número de Teléfono</label>
                        <input
                            suppressHydrationWarning

                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-cyan-800 rounded-lg p-3 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                            placeholder="+52 55 1234 5678"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-blue-200 font-semibold block">Fecha y Hora Preferida</label>
                    <input
                        suppressHydrationWarning
                        type="datetime-local"
                        name="sessionDate"
                        required
                        value={formData.sessionDate}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-cyan-800 rounded-lg p-3 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all [color-scheme:dark]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-blue-200 font-semibold block">Sobre tu Empresa / Negocio</label>
                    <textarea
                        suppressHydrationWarning

                        name="businessInfo"
                        required
                        value={formData.businessInfo}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-black/50 border border-cyan-800 rounded-lg p-3 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                        placeholder="Cuéntanos brevemente a qué se dedica tu empresa y qué te gustaría mejorar..."
                    />
                </div>

                <div className="flex items-center space-x-3 bg-cyan-900/20 p-4 rounded-lg border border-cyan-900/50">
                    <input
                        suppressHydrationWarning

                        type="checkbox"
                        name="callNow"
                        id="callNow"
                        checked={formData.callNow}
                        onChange={handleChange}
                        className="w-5 h-5 accent-cyan-500 rounded focus:ring-cyan-400"
                    />
                    <label htmlFor="callNow" className="text-blue-200 cursor-pointer select-none">
                        Deseo recibir una llamada en 30 minutos (si está disponible)
                    </label>
                </div>

                {errorMessage && (
                    <div className="p-3 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm text-center">
                        {errorMessage}
                    </div>
                )}

                <motion.button
                    suppressHydrationWarning

                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-black transition-all ${status === 'loading'
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                        }`}
                >
                    {status === 'loading' ? 'Enviando...' : 'Confirmar Sesión Estratégica'}
                </motion.button>
            </form>
        </div>
    );
}
