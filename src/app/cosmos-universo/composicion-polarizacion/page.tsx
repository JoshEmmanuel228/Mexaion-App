import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import QuantumBackground from '@/components/QuantumBackground';
import { Suspense } from 'react';

export default function ComposicionPolarizacionPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Composición y Polarización Inusual
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Descripción Científica</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Este módulo se centra en el análisis espectral y polarimétrico avanzado para objetos con características anómalas, como 3I/ATLAS o 1I/\\'Oumuamua. El objetivo es identificar composiciones químicas no convencionales y patrones de polarización que puedan indicar orígenes o físicas desconocidas.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Herramientas Integradas</h2>
            <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2">
              <li>Simuladores de espectro y composición química.</li>
              <li>Bases de datos de materiales y elementos interestelares.</li>
              <li>Algoritmos de análisis polarimétrico en tiempo real.</li>
              <li>Plataforma colaborativa para la comparación de datos espectrales.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
