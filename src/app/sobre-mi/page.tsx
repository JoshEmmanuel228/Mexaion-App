import React from 'react';
import Link from 'next/link';

// --- Icon Components ---
const IconWrapper = ({ className, children }: { className: string, children: React.ReactNode }) => (
  <div className={`w-12 h-12 ${className}`}>{children}</div>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.23c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);


// --- Timeline Components ---
const TimelineEvent = ({ title, skills, icon, color, isLast = false }: { title: string, skills: string[], icon: React.ReactNode, color: string, isLast?: boolean }) => (
    <div className="mb-12 pl-20 relative">
        <div className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-cyan-300 font-bold text-lg border-2 border-cyan-700 left-0">
            {icon}
        </div>
        {!isLast && <div className={`border-l-4 ${color}/50 absolute h-full left-8 top-16`}></div>}
        <div className="glass-pane p-6 rounded-lg">
            <h4 className={`text-2xl font-bold ${color} mb-4`}>{title}</h4>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    </div>
);


// --- Page Component ---
export default function SobreMiPage() {
  const skillCategories = [
    {
      category: 'IA y Visión por Computadora',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      color: 'text-cyan-400',
      skills: [
        'Desarrollo de sistemas de visión por computadora impulsados con IA para segmentación, detección, clasificación',
        'Procesamiento digital de imágenes y video en tiempo real',
        'Implementación de soluciones con visión artificial y redes neuronales',
      ]
    },
    {
      category: 'Desarrollo de Software',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      color: 'text-green-400',
      skills: [
        'Programación avanzada en Python, Java, C++ y C',
        'Diseño de interfaces gráficas y aplicaciones multiplataforma',
        'Desarrollo Full Stack: backend y frontend web con integración de IA y base de datos',
      ]
    },
    {
      category: 'Hardware y Sistemas Embebidos',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 00-4-4H3V9a4 4 0 014-4h1.586a1 1 0 01.707.293l4.414 4.414a1 1 0 00.707.293H19a4 4 0 014 4v1a2 2 0 01-2 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2H9z" /></svg>,
      color: 'text-yellow-400',
      skills: [
        'Automatización y robótica con microcontroladores para controlar sistemas físicos',
        'Experiencia en electrónica digital y analógica aplicada',
        'Integración de IoT con comunicación Bluetooth y WiFi',
      ]
    },
    {
      category: 'Ciencia de Datos y Matemáticas',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
      color: 'text-purple-400',
      skills: [
        'Aplicación de modelos matemáticos y estadísticos en entornos computacionales',
        'Formación sólida en matemáticas aplicadas, álgebra lineal, cálculo y teoría de señales',
        'Análisis de datos, probabilidad y estadística aplicada',
      ]
    },
    {
      category: 'Negocios y Finanzas',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      color: 'text-red-400',
      skills: [
        'Conocimientos en comercio internacional, logística y legislación aduanal',
        'Conocimientos en contabilidad, cálculo financiero, derecho mercantil y estadística aplicada',
        'Capacidad para analizar entornos económicos y regulatorios desde un enfoque global e interdisciplinario',
      ]
    },
    {
      category: 'Habilidades Interpersonales',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      color: 'text-orange-400',
      skills: [
        'Liderazgo de proyectos tecnológicos interdisciplinarios',
        'Comunicación técnica clara y efectiva en equipos multidisciplinarios',
      ]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      <header className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">CRONOLOGÍA DE UN CREADOR</h1>
        <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
          Un viaje a través del tiempo y la tecnología, explorando las habilidades de un Ingeniero en Inteligencia Artificial.
        </p>
      </header>

      <div className="glass-pane rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Joshua Emmanuel Meza Rodriguez</h2>
            <p className="text-cyan-400 text-2xl">Ingeniero en Inteligencia Artificial del Instituto Politécnico Nacional</p>
        </div>
      </div>

      <main className="relative">
        <div className="border-l-4 border-cyan-700/30 absolute h-full left-8 top-0 hidden md:block"></div>
        {skillCategories.map((cat, index) => (
            <TimelineEvent 
                key={cat.category}
                title={cat.category}
                skills={cat.skills}
                icon={cat.icon}
                color={cat.color}
                isLast={index === skillCategories.length - 1}
            />
        ))}
      </main>

      <footer className="glass-pane rounded-lg p-8 mt-16">
        <h3 className="text-3xl font-bold text-center text-white mb-8">Conecta con el Futuro</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center text-lg text-gray-300">
                <PhoneIcon />
                <span>5620539637</span>
            </div>
            <Link href="https://github.com/JoshEmmanuel228" target="_blank" rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                <GitHubIcon />
                Ver Perfil en GitHub
            </Link>
        </div>
      </footer>
    </div>
  );
}