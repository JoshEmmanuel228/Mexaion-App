import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import { Suspense } from 'react';
import QuantumBackground from '@/components/QuantumBackground';

const modules = [
  {
    title: 'Composición y Polarización',
    description: 'Análisis espectral y polarimétrico avanzado para objetos como 3I/ATLAS y 1I/\'Oumuamua.',
    href: '/cosmos-universo/composicion-polarizacion',
  },
  {
    title: 'Trayectorias Anómalas',
    description: 'Modelado dinámico y reconstrucción orbital para detectar movimientos fuera de patrones convencionales.',
    href: '/cosmos-universo/trayectorias-anomalas',
  },
  {
    title: 'UFOS y Antigravedad',
    description: 'Registro y análisis de OVNIs, investigando propiedades de antigravedad y campos anómalos.',
    href: '/cosmos-universo/ufos-antigravedad',
  },
  {
    title: 'Viajes Transmediáticos',
    description: 'Evaluación de informes y modelos sobre desplazamiento multidimensional o físico extremo.',
    href: '/cosmos-universo/viajes-transmediaticos',
  },
  {
    title: 'Baja Detectabilidad',
    description: 'Estudio de señales débiles y rastreo de objetos elusivos con filtrado avanzado.',
    href: '/cosmos-universo/baja-detectabilidad',
  },
  {
    title: 'Aceleración Instantánea y Velocidad Supersónica',
    description: 'Medición y simulación de aceleraciones repentinas y velocidades superiores al sonido.',
    href: '/cosmos-universo/aceleracion-supersonica',
  },
];

// Componente de tarjeta local para evitar dependencias incorrectas
const CosmosModuleCard = ({ href, title, description }: { href: string, title: string, description: string }) => (
  <Link 
    href={href} 
    className="block glass-pane p-6 rounded-lg border border-blue-400/20 transition-all duration-300 hover:border-cyan-400/80 hover:shadow-cyan-500/20 hover:shadow-lg"
  >
    <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
    <p className="text-blue-200/80 text-base">{description}</p>
  </Link>
);

export default function CosmosUniversoPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div>Cargando fondo...</div>}>
        <QuantumBackground />
      </Suspense>
      <div className="relative z-10 container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Cosmos y Universo
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-neutral-300">
          Plataforma de investigación para fenómenos astronómicos y físicos que desafían los modelos convencionales. Analice datos, contraste hipótesis y colabore en la frontera de la ciencia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <CosmosModuleCard
              key={module.href}
              title={module.title}
              description={module.description}
              href={module.href}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}