import React from 'react';

export default function PlanetaPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 6: Salud del Planeta</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">Resiliencia Planetaria y Modelado Climático</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>La Inteligencia Artificial es una herramienta indispensable para abordar la Salud del Planeta, especialmente en el contexto del cambio climático. La IA facilita el análisis de registros climáticos, el monitoreo del ciclo del carbono y el análisis de fenómenos globales.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">Sistemas de Detección Temprana</h3>
              <p>Su aplicación es crítica para la salud pública a través de sistemas de detección temprana. La IA permite modelar la propagación de enfermedades transmitidas por vectores (como la fiebre del Valle del Rift) mediante el análisis de características ambientales y climáticas, como la detección de especies específicas de mosquitos o garrapatas. Esto resulta crucial para crear sistemas de alerta temprana y permitir que las autoridades sanitarias tomen decisiones proactivas.</p>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="border border-red-500/50 p-6 rounded-lg bg-red-900/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Brechas de Datos y Equidad</h3>
              <p className="text-blue-200/90">El potencial global de la IA se ve comprometido por las "brechas espaciales" en la recopilación de datos, especialmente en regiones vulnerables. Esta insuficiencia de datos compromete la precisión de los modelos globales de IA, lo que puede agravar las desigualdades preexistentes en salud y resiliencia. La inversión en infraestructura de datos en estas regiones es una cuestión de equidad internacional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}