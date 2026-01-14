'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import QuantumButton from '@/components/QuantumButton';
import dynamic from 'next/dynamic';
import { ProjectCard } from '@/components/ProjectCard'; // Import the reusable component

const HolographicLogo = dynamic(() => import('@/components/HolographicLogo'), {
  ssr: false,
});

// The main and only component for the Home page
export default function Home() {
  // State for the interactive hero card
  const [isRevealed, setIsRevealed] = useState(false);

  // --- Helper Components defined inside Home to ensure client-side scope ---

  const MexaionPurpose = () => (
    <div className="prose prose-invert prose-lg max-w-none text-left">
      <h2 className="text-3xl font-bold text-center text-cyan-400">Mexaion: Inteligencia Artificial para un Futuro más Preciso, Saludable y Seguro</h2>
      <p className="lead text-center text-blue-300">"Innovación que Transciende Fronteras, Nacida en México para el Mundo"</p>
      
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-cyan-400">Nuestra Esencia: Mexaion</h3>
        <p className="text-blue-200">En el corazón de la revolución tecnológica global, surge Mexaion, una empresa forjada con el ingenio y la pasión de México (Mex), impulsada por el poder transformador de la Inteligenica Artificial (AI) y cargada con la energía dinámica de un ion (ión). No somos simplemente una empresa de tecnología; somos un catalizador de cambio, un puente entre el potencial ilimitado de la inteligencia artificial y los desafíos más apremiantes de la humanidad.</p>
        <p className="text-blue-200">Nuestra misión es desarrollar sistemas de IA que no solo procesen datos, sino que interpreten el entorno en tiempo real, anticipando necesidades, previniendo riesgos y optimizando procesos con una precisión sin precedentes. En Mexaion, estamos construyendo un futuro donde la tecnología sirve a la humanidad de manera intuitiva, eficiente y, sobre todo, segura.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-cyan-400">🧠 Nuestra Ventaja Tecnológica: La Interpretación del Entorno en Tiempo Real</h3>
        <p className="text-blue-200">Lo que unifica todas nuestras divisiones es nuestra tecnología central: la capacidad de nuestros sistemas para interpretar el entorno en tiempo real. A diferencia de la IA tradicional que simplemente procesa datos, los sistemas de Mexaion perciben, comprenden y actúan en función de un flujo constante de información del mundo real.</p>
        <p className="text-blue-200">Utilizamos una fusión de visión por computadora, procesamiento de lenguaje natural, y análisis de datos de sensores para crear una comprensión holística del contexto. Esto permite que nuestras soluciones tomen decisiones complejas y matizadas en fracciones de segundo, ya sea para evitar un accidente automovilístico, detectar una anomalía médica o neutralizar una ciberamenaza.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-cyan-400">Mexaion: Un Compromiso con el Futuro</h3>
        <p className="text-blue-200">Somos más que una empresa; somos un equipo de visionarios, ingenieros y científicos unidos por un propósito común: utilizar el poder de la inteligencia artificial para construir un mundo mejor. Con raíces en México y una visión global, en Mexaion estamos comprometidos con la excelencia, la innovación y un futuro donde la tecnología y la humanidad avancen de la mano.</p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-purple-400">Mexaion: Inteligencia que Protege, Precisión que Salva, Innovación que Transforma.</p>
      </div>
    </div>
  );

  const SalesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
  const AutomationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
  const VisionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
  const CheckIcon = () => <svg className="w-6 h-6 text-cyan-400 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

  // --- Data for components ---
  const labItems = [
    {
        name: 'Generador de Imágenes',
        description: 'Aplicación web interactiva para crear visualizaciones de galaxias y nebulosas. Integrada directamente en el portal para su uso inmediato.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '/generador-de-imagenes/index.html',
        imageUrl: '/cover-generator.jpg'
    },
    {
        name: 'El Ojo Digital',
        description: 'Suite de herramientas web para el análisis y manipulación de imágenes. Aplica filtros y algoritmos de PDI en tiempo real desde el navegador.',
        tech: ['Flask', 'Python', 'OpenCV', 'HTML'],
        link: 'http://127.0.0.1:5000',
        imageUrl: '/cover-pdi.png'
    }
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      {/* Section 1: Interactive Hero Card */}
      <div 
        className="w-full max-w-4xl glass-pane cursor-pointer overflow-hidden transition-all duration-700 ease-in-out mb-24"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
      >
        <div className="p-8 text-center">
            <div className="h-48 md:h-64 w-full transition-all duration-500 ease-in-out transform-gpu" style={{ filter: `drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))`}}>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
                    <pointLight position={[-10, -10, -10]} color="#f000f0" intensity={2} />
                    <HolographicLogo />
                </Canvas>
            </div>
            <p className={`text-lg md:text-xl text-blue-200 transition-opacity duration-500 ${isRevealed ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                La fuente de conexión entre máquina y humano.
            </p>
        </div>
        <div className={`transition-all duration-700 ease-in-out ${isRevealed ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 pb-8">
            <MexaionPurpose />
          </div>
        </div>
      </div>

      {/* Section 4: Lab */}
      <div id="laboratorio-de-vision" className="text-center w-full max-w-6xl glass-pane p-12 mb-24 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12">Laboratorio de Visión Artificial</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {labItems.map(p => <ProjectCard key={p.name} {...p} target="_blank" />)}
        </div>
        <QuantumButton href="/laboratorio-vision" className="bg-cyan-500/20 text-cyan-300 font-bold py-3 px-8 border border-cyan-500">
            Explorar Laboratorio
        </QuantumButton>
      </div>

      {/* Section 5: Projects */}
      <div id="proyectos" className="text-center w-full max-w-6xl glass-pane p-12 mb-24 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12">Proyectos que Generan Resultados</h2>
        <p className="text-blue-200/80 mb-12">Una selección de nuestros proyectos de desarrollo, investigación y experimentación en diversas áreas tecnológicas.</p>
        <QuantumButton href="/proyectos" className="bg-cyan-500/20 text-cyan-300 font-bold py-3 px-8 border border-cyan-500">
            Ver Portafolio Completo
        </QuantumButton>
      </div>

      {/* Section 3: Solutions */}
      <div className="text-center w-full max-w-6xl glass-pane p-12 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-12">Soluciones de IA a la Medida de tu Negocio</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/soluciones#ventas" className="block hover:scale-105 transition-transform duration-300">
            <div className="glass-pane p-6 h-full">
              <div className="flex justify-center mb-4"><SalesIcon /></div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">Aumenta tus Ventas y Presencia Digital</h3>
              <p className="text-blue-200/80">Desarrollo de aplicaciones y sitios web inteligentes que venden por ti, y campañas de marketing con IA para atraer más clientes.</p>
            </div>
          </Link>
          <Link href="/soluciones#automatizacion" className="block hover:scale-105 transition-transform duration-300">
            <div className="glass-pane p-6 h-full">
              <div className="flex justify-center mb-4"><AutomationIcon /></div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">Automatiza tu Operación y Ahorra Tiempo</h3>
              <p className="text-blue-200/80">Implementación de asistentes virtuales (chatbots) que atienden 24/7 y automatización de tareas repetitivas para que te enfoques en crecer.</p>
            </div>
          </Link>
          <Link href="/soluciones#vision" className="block hover:scale-105 transition-transform duration-300">
            <div className="glass-pane p-6 h-full">
              <div className="flex justify-center mb-4"><VisionIcon /></div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">Optimiza tu Tienda con Visión por Computadora</h3>
              <p className="text-blue-200/80">Análisis de video para entender el flujo de clientes, control de inventario automatizado y reconocimiento para la gestión eficiente de tu personal.</p>
            </div>
          </Link>
        </div>
        <QuantumButton href="/soluciones" className="bg-transparent border-2 border-blue-500 text-blue-300 font-bold py-3 px-8">
            Conoce los Detalles de las Soluciones
        </QuantumButton>
      </div>

      {/* Section 6: Final CTA */}
      <div className="w-full max-w-4xl p-12 glass-pane text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4">Análisis de Oportunidad Digital</h2>
        <p className="text-lg text-blue-200 mb-6 max-w-2xl mx-auto">Más que un diagnóstico, te ofrezco una <strong className="text-white">Sesión Estratégica Gratuita de 20 minutos</strong>. Juntos, analizaremos tu operación actual para identificar las áreas clave donde la tecnología puede generar el mayor impacto.</p>
        <ul className="text-left inline-block list-none space-y-2 mb-8">
            <li><CheckIcon /> Identifica cuellos de botella y tareas repetitivas.</li>
            <li><CheckIcon /> Descubre oportunidades de automatización y optimización.</li>
            <li><CheckIcon /> Recibe un plan de acción personalizado y claro.</li>
        </ul>
        <div>
            <QuantumButton href="/sobre-mi" className="bg-cyan-500 text-black font-bold py-4 px-10 text-lg animate-pulse">
                Agendar mi Sesión Estratégica Gratuita
            </QuantumButton>
        </div>
      </div>
    </main>
  );
}