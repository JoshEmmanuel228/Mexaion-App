import React from 'react';

// --- Generic Icon Component ---
const IconWrapper = ({ className, children }: { className: string, children: React.ReactNode }) => (
  <div className={`w-16 h-16 mb-4 ${className}`}>{children}</div>
);

// --- Page Component ---
const FinanzasCiberseguridadPage = () => {

  const fintechPillars = [
    { title: 'Pagos Digitales y Wallets', description: 'Transacciones instantáneas y seguras con móviles, P2P o QR, reduciendo la dependencia del efectivo.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { title: 'Neobancos y Challenger Banks', description: 'Bancos 100% digitales sin sucursales físicas, centrados en una experiencia de usuario superior y menores comisiones.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { title: 'Blockchain y Criptomonedas', description: 'Tecnología de libro de contabilidad digital que permite transacciones seguras y descentralizadas sin intermediarios.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
    { title: 'Finanzas Descentralizadas (DeFi)', description: 'Ecosistema financiero global construido sobre blockchain para recrear servicios tradicionales de forma descentralizada.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: 'IA y Big Data', description: 'Algoritmos para análisis de riesgo, robo-advisors, detección de fraude y trading algorítmico.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { title: 'Crowdfunding y Préstamos Alternativos', description: 'Plataformas que conectan a quienes necesitan capital con quienes están dispuestos a proporcionarlo, democratizando la inversión.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  ];

  const threats = [
    { title: 'Malware (Software Malicioso)', description: 'Incluye Ransomware, Spyware, Virus y Gusanos diseñados para causar daño, robar datos o cifrar archivos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: 'Phishing e Ingeniería Social', description: 'Manipulación psicológica para engañar a las víctimas y que revelen credenciales o instalen malware.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg> },
    { title: 'Ataques de Denegación de Servicio (DoS/DDoS)', description: 'Inundar un servidor con tráfico basura para colapsarlo y hacer que el servicio no esté disponible.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636" /></svg> },
    { title: 'Ataque de "Hombre en el Medio" (MitM)', description: 'El atacante se posiciona secretamente entre dos partes para interceptar, leer o alterar la comunicación.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  ];

  const defenses = [
    { title: 'Tríada de la CIA', description: 'Modelo fundamental de seguridad: Confidencialidad, Integridad y Disponibilidad.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { title: 'Defensas Tecnológicas', description: 'Uso de Firewalls, Encriptación, Software Antimalware y Gestión de Identidad y Acceso (IAM).', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
    { title: 'Factor Humano y "Confianza Cero"', description: 'Modelo "nunca confiar, siempre verificar", complementado con formación constante a los empleados.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> },
    { title: 'IA en Ciberseguridad', description: 'Uso de IA para detectar anomalías, predecir amenazas y automatizar respuestas a incidentes en tiempo real.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      
      {/* --- FinTech Section --- */}
      <section id="fintech" className="scroll-mt-20 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">FinTech: La Anatomía de la Revolución Financiera Digital</h1>
          <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
            La simbiosis entre finanzas y tecnología que está redefiniendo cómo ahorramos, invertimos y gestionamos nuestro dinero.
          </p>
        </header>

        <div id="pilares-fintech" className="scroll-mt-20">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">Pilares Fundamentales de la Transformación FinTech</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fintechPillars.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg text-center flex flex-col items-center">
                        <IconWrapper className="text-green-400">{item.icon}</IconWrapper>
                        <h4 className="text-xl font-bold text-green-400 mb-2">{item.title}</h4>
                        <p className="text-blue-200/80">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <hr className="my-16 border-blue-400/30" />

      {/* --- Cybersecurity Section --- */}
      <section id="ciberseguridad" className="scroll-mt-20 py-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-400">Ciberseguridad: La Defensa del Mundo Digital</h2>
          <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
            El sistema inmunológico de nuestra sociedad digital, protegiendo redes, dispositivos y datos de un panorama de amenazas en constante evolución.
          </p>
        </header>

        <div id="amenazas" className="scroll-mt-20 mb-16">
            <h3 className="text-3xl font-bold text-center text-red-300 mb-12">El Panorama de Amenazas</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {threats.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg flex items-start gap-4">
                        <IconWrapper className="text-red-400">{item.icon}</IconWrapper>
                        <div>
                            <h4 className="text-xl font-bold text-red-400 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div id="ciberdefensa" className="scroll-mt-20">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">Los Pilares de la Ciberdefensa</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {defenses.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg flex items-start gap-4">
                        <IconWrapper className="text-cyan-400">{item.icon}</IconWrapper>
                        <div>
                            <h4 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default FinanzasCiberseguridadPage;
