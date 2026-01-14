import React from 'react';

export default function EjercicioPage() {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 text-white">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Bioruta 2: Ejercicio Físico</h1>
          <p className="text-xl md:text-2xl text-blue-200 mt-2">Rendimiento Físico y Prevención Adaptativa</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 glass-pane p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none">
              <p>La IA proporciona una ventaja crítica en el Ejercicio Físico mediante la optimización dinámica de la carga de entrenamiento y la prevención predictiva de lesiones. Los algoritmos personalizan los planes de entrenamiento para equilibrar la carga y la recuperación, asegurando que los atletas operen en su "punto óptimo" y previniendo el rebasamiento de límites que podrían conducir a una lesión.</p>
              
              <h3 className="text-2xl text-cyan-300 border-l-4 border-cyan-400 pl-4">Capacidad Predictiva y Monitoreo</h3>
              <p>La capacidad predictiva se basa en el uso de machine learning para analizar datos históricos de lesiones y entrenamientos. Estos sistemas pueden prever el riesgo futuro de lesiones, permitiendo a entrenadores y médicos ajustar los programas de entrenamiento de forma proactiva según el riesgo individual. El monitoreo en tiempo real, facilitado por dispositivos wearables, es crucial, ya que detectan signos tempranos de fatiga muscular, estrés o desbalances biomecánicos. Para que la IA sea efectiva, es fundamental la integración holística de datos que abarcan información médica, carga de entrenamiento, horas de sueño y nutrición.</p>
            </article>
          </div>

          {/* Sidebar / Highlight Cards */}
          <div className="space-y-8">
            <div className="glass-pane p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/30 pb-2">Validación en el Alto Rendimiento</h3>
                <p className="text-blue-200/90">Clubes de LALIGA como el <strong>Sevilla FC</strong> y el <strong>Athletic Club de Bilbao</strong>, han implementado tecnologías de IA para rastrear indicadores de salud, logrando reducir la incidencia de lesiones musculares al ajustar los regímenes de entrenamiento y recuperación basándose en datos en tiempo real.</p>
            </div>
            
            <div className="border border-green-500/50 p-6 rounded-lg bg-green-900/20">
              <h3 className="text-xl font-bold text-green-400 mb-4">De la Élite a la Salud Masiva</h3>
              <p className="text-blue-200/90">La eficacia comprobada en el deporte de élite sirve como un modelo para la salud masiva. Demuestra que el sistema predictivo de la IA puede masificarse, ofreciendo una gestión del riesgo fisiológico que pasa de ser reactiva a proactiva. Esta transición es posible solo mediante la simbiosis tecnológica que interconecta Nutrición, Estados de Conciencia y Ejercicio Físico.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}