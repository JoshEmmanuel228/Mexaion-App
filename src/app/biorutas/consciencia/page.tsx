import React from 'react';

export default function ConscienciaPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 5: Estados de Conciencia</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">Modulación Neuronal y Mejora Cognitiva</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>Esta Bioruta abarca la aplicación de tecnologías avanzadas para modular la función cerebral. Las <strong>Interfaces Cerebro-Computadora (BCI)</strong> buscan principalmente reemplazar o restaurar funciones neurológicas perdidas, como la movilidad asistida para personas paralizadas o la rehabilitación neurológica.</p>
              <p>Por su parte, el <strong>Neurofeedback (NF)</strong> es una intervención no farmacológica que utiliza el condicionamiento operante. El usuario aprende a modificar patrones específicos de ondas cerebrales o métricas neuronales para lograr un beneficio terapéutico o la optimización del rendimiento, aplicándose en tratamientos para TDAH, ansiedad, insomnio y depresión.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">Neurofeedback de Precisión con IA</h3>
              <p>La IA potencia el NF tradicional, creando lo que se denomina Neurofeedback de Precisión. Esto implica el desarrollo de protocolos personalizados basados en patrones cerebrales individuales y perfiles genéticos, utilizando enfoques avanzados como Z-Score LORETA y el entrenamiento de conectividad para modular la actividad en tiempo real.</p>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="border border-yellow-500/50 p-6 rounded-lg bg-yellow-900/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">El Dilema de la Mejora Cognitiva</h3>
              <p className="text-blue-200/90">La IA facilita la exploración de la "mejora cognitiva" en individuos sanos. Si bien esto representa una aplicación prometedora, introduce una brecha de equidad fundamental. La capacidad de pagar por la optimización cognitiva podría generar una nueva forma de disparidad socioeconómica. Por lo tanto, se necesita una distinción regulatoria clara que priorice la equidad y el acceso a los beneficios terapéuticos sobre la mejora competitiva.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}