import React from 'react';

const BulletIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function NutricionPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 1: Nutrición</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">Nutrición de Precisión y la Arquitectura Dietética</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>La IA está impulsando una revolución en la Nutrición a través de sistemas de recomendación avanzados. Estos sistemas utilizan el Procesamiento de Lenguaje Natural (NLP) para interactuar con los usuarios, recopilar sus preferencias dietéticas, restricciones y objetivos de salud. Esta interacción facilita la extracción de la intención del usuario, permitiendo que el modelo recupere datos dinámicamente de servicios y bases de datos, incluyendo información nutricional y bases de datos de recetas. La aplicación resultante funciona como un "asistente personal" que sugiere planes de comidas, rutinas de ejercicios y suplementos personalizados, ajustándose a variables como el Índice de Masa Corporal (IMC) y los objetivos específicos.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">El Futuro: Nutrición Multi-ómica</h3>
              <p>El paso evolutivo más significativo en esta Bioruta es la transición a la Nutrición Multi-ómica. Aunque los sistemas actuales se enfocan en datos de comportamiento y preferencia, la verdadera precisión biológica requiere que la IA integre datos genómicos, microbiómicos y metabolómicos. Esta transición convierte la aplicación de nutrición en un sistema de biovigilancia, donde el algoritmo actúa como un tutor biológico que ajusta la ingesta para modular la fisiología individual.</p>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="glass-pane p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/30 pb-2">Componentes de la Arquitectura</h3>
              <ul className="space-y-4 text-blue-200/90">
                <li className="flex items-start"><BulletIcon /><span><strong>Chatbot Nutricional:</strong> Extrae intenciones y ofrece respuestas personalizadas.</span></li>
                <li className="flex items-start"><BulletIcon /><span><strong>Recomendador de Ejercicio:</strong> Utiliza un modelo híbrido basado en historial y objetivos.</span></li>
                <li className="flex items-start"><BulletIcon /><span><strong>Recomendador de Suplementos:</strong> Sugiere vitaminas o minerales ajustados al perfil del usuario.</span></li>
                <li className="flex items-start"><BulletIcon /><span><strong>Recomendador de Nutricionistas:</strong> Empareja al individuo con profesionales alineados a sus necesidades.</span></li>
              </ul>
            </div>
            
            <div className="border border-red-500/50 p-6 rounded-lg bg-red-900/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Riesgos Éticos</h3>
              <p className="text-blue-200/90">La gestión de datos multi-ómicos y de comportamiento incrementa el riesgo de privacidad. Además, la falta de diversidad en los datos de entrenamiento puede generar sesgos algorítmicos, resultando en disparidades de salud para grupos minoritarios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}