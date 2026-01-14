import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import QuantumBackground from '@/components/QuantumBackground';
import { Suspense } from 'react';

export default function BajaDetectabilidadPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Baja Detectabilidad
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Descripción Científica</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Estudio espectral y físico de señales débiles, transitorias u ocultas. Desarrollo de técnicas para el rastreo de objetos elusivos que parecen evadir la detección por medios convencionales (radar, óptico, infrarrojo).
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Herramientas Integradas</h2>
            <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2">
              <li>Filtradores de señal avanzados y reductores de ruido cuántico.</li>
              <li>Radares virtuales y simuladores de sección transversal de radar (RCS).</li>
              <li>Algoritmos de apilamiento de imágenes para la detección de objetos tenues.</li>
              <li>Redes de telescopios sincronizados para triangulación de señales.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
