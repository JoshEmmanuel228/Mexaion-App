import React from 'react';

// --- Generic Icon Component ---
const IconWrapper = ({ className, children }: { className: string, children: React.ReactNode }) => (
  <div className={`w-16 h-16 mb-4 ${className}`}>{children}</div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-12">{children}</h2>
);

// --- Page Component ---
const InfraestructuraInteligentePage = () => {

  const components = [
    { title: 'Capa de Detección (Los Sentidos)', description: 'Red masiva de sensores y dispositivos IoT que actúan como los ojos y oídos del sistema, capturando datos en tiempo real (flujo de tráfico, consumo de energía, etc.).', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
    { title: 'Capa de Conectividad (El Sistema Nervioso)', description: 'Redes de alta velocidad (5G, fibra óptica) que transportan la información desde los sensores hasta el cerebro central para su procesamiento.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.929a15 15 0 0121.214 0" /></svg> },
    { title: 'Capa de Análisis (El Cerebro)', description: 'Algoritmos de IA y Big Data que analizan los datos para detectar patrones, predecir fallos y optimizar operaciones. Incluye el concepto de Gemelo Digital.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { title: 'Capa de Actuación (La Acción)', description: 'El sistema toma decisiones y las ejecuta a través de actuadores, como cambiar la sincronización de semáforos o cerrar una válvula de agua.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  ];

  const applications = [
    { title: 'Redes Eléctricas Inteligentes (Smart Grids)', description: 'Comunicación bidireccional para balancear la carga, integrar renovables y "autocurarse" ante fallos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: 'Movilidad y Transporte Inteligente', description: 'Semáforos adaptativos, estacionamiento inteligente y gestión de flotas para optimizar rutas y reducir la congestión.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 00-4-4H3V9a4 4 0 014-4h1.586a1 1 0 01.707.293l4.414 4.414a1 1 0 00.707.293H19a4 4 0 014 4v1a2 2 0 01-2 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2H9z" /></svg> },
    { title: 'Gestión Inteligente del Agua', description: 'Detección de fugas en tiempo real, monitoreo de la calidad y optimización de la distribución para un uso más eficiente.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
    { title: 'Edificios Inteligentes', description: 'Ajuste automático de climatización e iluminación, y mantenimiento predictivo para ahorrar energía y anticipar fallos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M5 6h14M5 11h14M5 16h14" /></svg> },
  ];

  const benefits = [
      { title: 'Eficiencia y Ahorro', icon: '✅' },
      { title: 'Sostenibilidad', icon: '🌳' },
      { title: 'Resiliencia y Seguridad', icon: '🛡️' },
      { title: 'Mejora de la Calidad de Vida', icon: '😊' },
  ];

  const challenges = [
      { title: 'Inversión Inicial Elevada', icon: '💰' },
      { title: 'Ciberseguridad', icon: '🔒' },
      { title: 'Privacidad de los Datos', icon: '🤫' },
      { title: 'Interoperabilidad', icon: '🔄' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Infraestructura Inteligente</h1>
        <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
          El esqueleto físico del mundo moderno dotado de un sistema nervioso digital, permitiéndole sentir, analizar, comunicar y actuar de forma autónoma.
        </p>
      </header>

      <main>
        <section id="componentes" className="scroll-mt-20 py-12">
            <SectionTitle>Los Componentes Clave: El ADN de la Inteligencia</SectionTitle>
            <div className="relative">
                <div className="border-l-4 border-cyan-700/50 absolute h-full left-8 top-0"></div>
                {components.map((item, index) => (
                <div key={index} className="mb-12 pl-24 relative">
                    <div className="absolute top-0 left-0"><IconWrapper className="text-cyan-400">{item.icon}</IconWrapper></div>
                    <div className="glass-pane p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h4>
                    <p className="text-blue-200/80">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>

        <section id="aplicaciones" className="scroll-mt-20 py-12">
            <SectionTitle>Aplicaciones Clave: La Inteligencia en Acción</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {applications.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg flex items-start gap-4">
                        <IconWrapper className="text-green-400">{item.icon}</IconWrapper>
                        <div>
                            <h4 className="text-xl font-bold text-green-400 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section id="beneficios-desafios" className="scroll-mt-20 py-12">
            <SectionTitle>Beneficios y Desafíos</SectionTitle>
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-bold text-center text-green-400 mb-8">Ventajas Principales</h3>
                    <div className="flex flex-col gap-4">
                        {benefits.map(item => (
                            <div key={item.title} className="glass-pane p-4 rounded-lg flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-lg text-blue-200">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center text-red-400 mb-8">Desafíos a Superar</h3>
                    <div className="flex flex-col gap-4">
                        {challenges.map(item => (
                            <div key={item.title} className="glass-pane p-4 rounded-lg flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-lg text-blue-200">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </main>

    </div>
  );
};

export default InfraestructuraInteligentePage;
