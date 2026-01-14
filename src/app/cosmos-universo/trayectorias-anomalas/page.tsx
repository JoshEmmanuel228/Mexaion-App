import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import QuantumBackground from '@/components/QuantumBackground';
import { Suspense } from 'react';

export default function TrayectoriasAnomalasPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Trayectorias Anómalas
          </h1>
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Descripción Científica</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Modelado dinámico y reconstrucción orbital para la detección de movimientos que escapan a los patrones gravitacionales conocidos. Análisis de anomalías sospechosas en trayectorias de objetos interestelares y fenómenos no identificados.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Herramientas Integradas</h2>
            <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2">
              <li>Mapeadores astrodinámicos de alta precisión.</li>
              <li>Simuladores orbitales con modelos gravitacionales extendidos.</li>
              <li>Algoritmos de Machine Learning para la detección de patrones de movimiento anómalos.</li>
              <li>Visualizadores 4D de trayectorias.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
