import React from 'react';

const BulletIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function SaludMentalPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 4: Salud Mental</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">Expansión del Acceso y Monitoreo Emocional</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>En la Salud Mental, la IA, principalmente a través de chatbots terapéuticos, está revolucionando el acceso al tratamiento. Ofrecen un espacio seguro y privado, lo que promueve la privacidad y reduce significativamente el estigma social que a menudo dificulta la búsqueda de apoyo tradicional.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">Fortalezas Operativas</h3>
              <p>Una fortaleza operativa del chatbot es su capacidad para el monitoreo constante del bienestar emocional. Al mantener registros periódicos y detallados de la evolución psicológica, facilita la detección de patrones tempranos de recaída, permitiendo una actuación oportuna. Algunos estudios sugieren que los índices de mejoría en salud mental tras ocho semanas de interacción con el chatbot pueden ser equiparables a los obtenidos mediante tratamiento convencional cara a cara.</p>

              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4 mt-8">Limitaciones y el Futuro Híbrido</h3>
              <p>No obstante, existen limitaciones críticas. La IA no sustituye la experiencia, el juicio intuitivo, o la capacidad de un profesional certificado. El control y la supervisión humana son esenciales, especialmente en casos clínicos complejos o graves. La visión de futuro es la "Terapia Híbrida," integrando la eficiencia de la IA para el soporte y la recopilación de datos con la experiencia humana para el diagnóstico y la intervención compleja.</p>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="glass-pane p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/30 pb-2">Beneficios Estratégicos</h3>
              <ul className="space-y-4 text-blue-200/90">
                <li className="flex items-start"><BulletIcon /><span><strong>Acceso Inmediato:</strong> Eliminan barreras logísticas y tiempos de espera.</span></li>
                <li className="flex items-start"><BulletIcon /><span><strong>Privacidad y Confidencialidad:</strong> Ofrecen un espacio seguro para el usuario.</span></li>
                <li className="flex items-start"><BulletIcon /><span><strong>Reducción de Estigma:</strong> Facilitan la búsqueda de apoyo sin juicio social.</span></li>
              </ul>
            </div>
            
            <div className="border border-red-500/50 p-6 rounded-lg bg-red-900/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">El Problema de la Responsabilidad</h3>
              <p className="text-blue-200/90">Si un sistema de IA detecta un patrón de alto riesgo pero falla en activar un protocolo de intervención humana, se plantea la pregunta de la responsabilidad. Los marcos regulatorios deben definir los límites de la autonomía de la IA en decisiones críticas de salud mental y establecer mecanismos claros de rendición de cuentas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}