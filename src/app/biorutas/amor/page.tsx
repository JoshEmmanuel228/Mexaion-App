import React from 'react';

const BulletIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function AmorPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 7: Amor y Felicidad</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">La Calidad de Vida como Resultado Sintético</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>La Bioruta de Amor y Felicidad se interpreta como la métrica de éxito final y la manifestación del bienestar logrado a través de la gestión e integración efectiva de las otras seis Biorutas.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">La Contribución Indirecta de la IA</h3>
              <p>La contribución de la IA a esta Bioruta es indirecta pero profunda, ya que reduce las fuentes sistémicas de sufrimiento humano. La tecnología contribuye a la felicidad al:</p>
              <ul className="list-none p-0">
                <li className="flex items-start my-4"><BulletIcon /><span>Mejorar la longevidad y reducir la carga de enfermedad (a través de la precisión en Nutrición y Ejercicio Físico).</span></li>
                <li className="flex items-start my-4"><BulletIcon /><span>Reducir el estigma y mejorar el acceso al apoyo en Salud Mental, proporcionando espacios privados y monitoreo constante.</span></li>
                <li className="flex items-start my-4"><BulletIcon /><span>Asegurar que los principios éticos de inclusividad y equidad se respeten en todas las aplicaciones, facilitando un entorno social más justo y saludable.</span></li>
              </ul>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="border border-yellow-500/50 p-6 rounded-lg bg-yellow-900/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Riesgos y Potencial Sistémico</h3>
              <p className="text-blue-200/90">El riesgo principal es la instrumentalización o cuantificación excesiva de las emociones humanas. No obstante, el mayor potencial de la IA es sistémico: al proporcionar la infraestructura para un entorno en el que la enfermedad, la falta de acceso y el riesgo ambiental se gestionan de manera proactiva, la IA facilita las condiciones esenciales para el bienestar colectivo y la calidad de vida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}