import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import QuantumBackground from '@/components/QuantumBackground';
import { Suspense } from 'react';

export default function UfosAntigravedadPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            UFOS y Antigravedad
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Descripción Científica</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Registro y análisis de datos (visuales, radar, físicos) de Fenómenos Anómalos no Identificados (UAPs/UFOS). Investigación de posibles campos y fenómenos antigravitatorios asociados, y sus implicaciones para la física fundamental.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Herramientas Integradas</h2>
            <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2">
              <li>Procesadores de imágenes y vídeo con mejora por IA.</li>
              <li>Algoritmos de detección y seguimiento de objetos en múltiples espectros.</li>
              <li>Bases de datos de casos documentados con validación cruzada.</li>
              <li>Modeladores de campos de energía y distorsiones espaciales.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
