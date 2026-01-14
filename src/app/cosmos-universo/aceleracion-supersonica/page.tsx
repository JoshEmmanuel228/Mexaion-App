import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import QuantumBackground from '@/components/QuantumBackground';
import { Suspense } from 'react';

export default function AceleracionSupersonicaPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Aceleración Instantánea y Velocidad Supersónica
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Descripción Científica</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Medición, análisis y simulación de aceleraciones repentinas y velocidades superiores al sonido sin firma sónica o térmica detectable. Estudio de las fuerzas G extremas y la posible manipulación del espacio-tiempo local.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Herramientas Integradas</h2>
            <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2">
              <li>Simuladores dinámicos de fluidos y plasma.</li>
              <li>Analizadores de datos cinéticos de alta velocidad.</li>
              <li>Modeladores de métricas de Alcubierre y otras teorías de warp drive.</li>
              <li>Bases de datos de perfiles de vuelo anómalos.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
