'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// --- Icon Components ---
const SalesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const AutomationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const VisionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CheckIcon = () => <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const solutionTabs = [
    { id: 'ventas', title: 'Ventas y Presencia Digital', icon: <SalesIcon /> },
    { id: 'automatizacion', title: 'Automatización y Ahorro', icon: <AutomationIcon /> },
    { id: 'vision', title: 'Optimización con Visión IA', icon: <VisionIcon /> },
];

const SectionCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="glass-pane-light p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">{title}</h3>
        <div className="prose prose-invert max-w-none text-blue-200/90 text-lg">
            {children}
        </div>
    </div>
);

const ResultsCard = ({ results }: { results: string[] }) => (
    <div className="glass-pane p-6 rounded-lg border-l-4 border-green-400">
        <h3 className="text-2xl font-bold text-green-300 mb-4">Resultados Clave</h3>
        <ul className="space-y-3">
            {results.map((result, index) => (
                <li key={index} className="flex items-start text-lg">
                    <CheckIcon />
                    <span>{result}</span>
                </li>
            ))}
        </ul>
    </div>
);

const VentasContent = () => (
  <div id="ventas">
    <SectionCard title="El Desafío: La Lucha por la Visibilidad Digital">
        <p>En el mercado digital, la visibilidad es la nueva moneda. Empresas con productos excelentes fracasan por no conectar con su audiencia en el vasto océano de internet. La competencia por la atención es feroz y una mala experiencia de usuario significa una venta perdida en segundos.</p>
    </SectionCard>
    <SectionCard title="Nuestra Solución: Ecosistemas de Crecimiento Digital">
        <p>Construimos un ecosistema digital integral y centrado en la conversión. No solo creamos "páginas web", diseñamos motores de crecimiento.</p>
        <ul className="list-none space-y-4 pl-0 mt-4">
            <li><strong className="text-cyan-400">E-commerce de Alto Impacto:</strong> Creamos plataformas de venta online rápidas, seguras y optimizadas para la conversión, con un diseño 100% adaptable a móviles.</li>
            <li><strong className="text-cyan-400">Marketing de Precisión (Data-Driven):</strong> Posicionamos tu marca en Google (SEO & SEM) y creamos contenido que construye una comunidad leal en redes sociales.</li>
            <li><strong className="text-cyan-400">Gestión de Clientes (CRM):</strong> Integramos sistemas para centralizar la información de tus clientes, personalizar la comunicación y fomentar la lealtad.</li>
        </ul>
    </SectionCard>
    <ResultsCard results={[
        'Incremento medible en el tráfico web y las conversiones.',
        'Reducción del costo de adquisición de clientes (CAC).',
        'Construcción de una marca sólida y reconocida en el sector digital.',
        'Decisiones de negocio basadas en datos, no en suposiciones.',
    ]} />
  </div>
);

const AutomatizacionContent = () => (
    <div id="automatizacion">
        <SectionCard title="El Desafío: El Lastre de las Tareas Repetitivas">
            <p>Las tareas manuales, repetitivas y desconectadas son un freno para la productividad. La gestión de inventarios, la facturación y la comunicación interna consumen horas valiosas que podrían dedicarse a la innovación.</p>
        </SectionCard>
        <SectionCard title="Nuestra Solución: El Sistema Nervioso Central de tu Empresa">
            <p>Implementamos sistemas de automatización inteligente que conectan procesos y liberan a tu equipo para que se enfoque en tareas de alto valor.</p>
            <ul className="list-none space-y-4 pl-0 mt-4">
                <li><strong className="text-cyan-400">Software a la Medida (ERP/Workflows):</strong> Digitalizamos y automatizamos tus procesos operativos únicos, desde la gestión de inventario hasta el seguimiento de proyectos.</li>
                <li><strong className="text-cyan-400">Integración de Sistemas (APIs):</strong> Conectamos las herramientas que ya utilizas en un flujo de trabajo unificado, automatizando tareas como la facturación y la logística.</li>
                <li><strong className="text-cyan-400">RPA y Chatbots con IA:</strong> Implementamos "bots" para manejar tareas 24/7 sin errores e integramos chatbots para gestionar consultas frecuentes de clientes.</li>
            </ul>
        </SectionCard>
        <ResultsCard results={[
            'Reducción de hasta un 80% en el tiempo dedicado a tareas administrativas.',
            'Disminución drástica de errores operativos y costos asociados.',
            'Visibilidad completa y en tiempo real de la operación del negocio.',
            'Capacidad para escalar la operación sin aumentar proporcionalmente el personal.',
        ]} />
    </div>
);

const VisionContent = () => (
    <div id="vision">
        <SectionCard title="El Desafío: Operar a Ciegas en el Espacio Físico">
            <p>El espacio físico de una tienda es un activo caro, pero la mayoría de los negocios no tiene datos precisos sobre el comportamiento de sus clientes. ¿Qué pasillos son los más transitados? ¿Qué productos capturan la atención? Responder a esto es casi imposible con métodos tradicionales.</p>
        </SectionCard>
        <SectionCard title="Nuestra Solución: Inteligencia de Negocio a través de la Visión">
            <p>Convertimos tus cámaras de seguridad estándar en una poderosa herramienta de inteligencia de negocio, extrayendo datos anónimos y accionables del mundo real mediante IA y Visión por Computadora.</p>
            <ul className="list-none space-y-4 pl-0 mt-4">
                <li><strong className="text-cyan-400">Análisis de Flujo y Comportamiento:</strong> Creamos mapas de calor y analizamos rutas para optimizar la distribución de productos y medir la tasa de captación de clientes.</li>
                <li><strong className="text-cyan-400">Gestión Inteligente de Stock:</strong> Monitoreamos estantes en tiempo real para detectar productos agotados y enviar alertas automáticas, evitando ventas perdidas.</li>
                <li><strong className="text-cyan-400">Optimización de Filas y Seguridad:</strong> Medimos el tiempo de espera en cajas para mejorar la experiencia del cliente e identificamos patrones de comportamiento anómalos para reducir pérdidas.</li>
            </ul>
        </SectionCard>
        <ResultsCard results={[
            'Aumento de las ventas por metro cuadrado al optimizar la distribución.',
            'Reducción de hasta un 95% en ventas perdidas por quiebres de stock.',
            'Mejora de la satisfacción del cliente al reducir los tiempos de espera.',
            'Decisiones estratégicas basadas en evidencia real del comportamiento del cliente.',
        ]} />
    </div>
);


const SolucionesComponent = () => {
  const [activeTab, setActiveTab] = useState('ventas');
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['ventas', 'automatizacion', 'vision'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-white">
      <div className="text-center w-full max-w-6xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">PORTALES AL FUTURO DE TU NEGOCIO</h1>
        <p className="text-lg text-blue-300 mt-4 max-w-4xl mx-auto">Nuestros tres pilares de transformación. Cada solución es un portal a una operación más eficiente, rentable e inteligente.</p>
      </div>

      <div className="w-full max-w-6xl glass-pane p-2 sm:p-4 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-around bg-black/20 rounded-lg">
          {solutionTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 p-4 font-bold transition-all duration-300 flex items-center justify-center gap-4 rounded-lg ${
                activeTab === tab.id
                  ? 'bg-cyan-500/20 text-cyan-200 scale-105'
                  : 'text-blue-300/70 hover:bg-cyan-500/10 hover:text-cyan-200'
              }`}
            >
              {tab.icon}
              <span className="text-base sm:text-lg text-center sm:text-left">{tab.title}</span>
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-8 mt-4">
          {activeTab === 'ventas' && <VentasContent />}
          {activeTab === 'automatizacion' && <AutomatizacionContent />}
          {activeTab === 'vision' && <VisionContent />}
        </div>
      </div>
    </main>
  );
}

export default function SolucionesPage() {
  return (
    <Suspense fallback={<div className="text-white text-center p-12">Cargando soluciones...</div>}>
      <SolucionesComponent />
    </Suspense>
  );
}
