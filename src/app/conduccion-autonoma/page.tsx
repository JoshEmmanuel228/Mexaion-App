import React from 'react';

// --- Icon Components ---
const LevelIcon = ({ level }: { level: string }) => (
  <div className="absolute w-12 h-12 bg-cyan-900 rounded-full flex items-center justify-center text-cyan-300 font-bold text-lg border-2 border-cyan-700">
    {level}
  </div>
);

const TechIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 mb-4 text-cyan-400">{children}</div>
);

const SoftwareIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 mb-4 text-green-400">{children}</div>
);

const ChallengeIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 mb-4 text-red-400">{children}</div>
);

const FutureIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 mb-4 text-purple-400">{children}</div>
);


// --- Section Components ---

const AutomationLevels = () => {
  const levels = [
    { level: '0', title: 'Sin Automatización', description: 'El conductor humano lo hace todo: dirigir, frenar, acelerar. No hay ninguna función automatizada.' },
    { level: '1', title: 'Asistencia al Conductor', description: 'El vehículo puede ayudar con una sola tarea, ya sea la dirección (asistente de mantenimiento de carril) o la velocidad (control de crucero adaptativo), pero no ambas a la vez.' },
    { level: '2', title: 'Automatización Parcial', description: 'El vehículo puede controlar simultáneamente la dirección y la velocidad. Es lo que comúnmente se conoce como "Autopilot". El conductor debe permanecer atento.' },
    { level: '3', title: 'Automatización Condicional', description: 'El vehículo puede manejar todas las tareas de conducción en condiciones específicas, avisando al humano cuando necesite que retome el control.' },
    { level: '4', title: 'Alta Automatización', description: 'El vehículo es completamente autónomo en un área geográfica o condiciones predefinidas (un "geofence"). No necesita intervención humana en esa zona.' },
    { level: '5', title: 'Automatización Total', description: 'El vehículo es capaz de conducir por sí mismo en todas las condiciones y en cualquier lugar que un humano podría hacerlo. No necesita volante ni pedales.' },
  ];

  return (
    <section id="niveles-de-automatizacion" className="scroll-mt-20 py-12">
      <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">Los 6 Niveles de Automatización (SAE)</h3>
      <div className="relative">
        <div className="border-l-4 border-cyan-700/50 absolute h-full left-6"></div>
        {levels.map((item, index) => (
          <div key={index} className="mb-12 pl-20 relative">
            <LevelIcon level={item.level} />
            <div className="glass-pane p-6 rounded-lg">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">Nivel {item.level}: {item.title}</h4>
              <p className="text-blue-200/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const KeyTechnology = () => {
    const technologies = [
        { title: 'LiDAR', description: 'Crea un mapa 3D en tiempo real del entorno con pulsos de luz láser para medir distancias con extrema precisión.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
        { title: 'Cámaras', description: 'Leen señales de tráfico, detectan colores de semáforos, identifican carriles y reconocen peatones usando visión por computadora.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { title: 'Radar', description: 'Funciona perfectamente en lluvia, niebla o nieve, emitiendo ondas de radio para determinar la velocidad y distancia de los objetos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" /></svg> },
        { title: 'Sensores Ultrasónicos', description: 'Detectan objetos a muy corta distancia con ondas sonoras, ideales para el asistente de aparcamiento y maniobras a baja velocidad.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12 3" /></svg> },
        { title: 'Mapas HD', description: 'Mapas con precisión centimétrica que contienen información detallada de carriles, señales y límites de velocidad.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7" /></svg> },
        { title: 'El Cerebro', description: 'Un potente ordenador a bordo que fusiona los datos de los sensores, ejecuta algoritmos de IA y toma decisiones en milisegundos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    ];
    return (
        <section id="tecnologia-clave" className="scroll-mt-20 py-12">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">La Tecnología Clave: Los Sentidos del Coche</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map(tech => (
                    <div key={tech.title} className="glass-pane p-6 rounded-lg text-center flex flex-col items-center">
                        <TechIcon>{tech.icon}</TechIcon>
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">{tech.title}</h4>
                        <p className="text-blue-200/80">{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const SoftwareIntelligence = () => {
    const steps = [
        { title: 'Percepción', description: 'Fusiona datos de sensores para construir un modelo 3D del entorno, identificando y clasificando objetos con deep learning.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg> },
        { title: 'Predicción', description: 'Anticipa las acciones de otros agentes en la vía (coches, peatones) utilizando modelos de comportamiento.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
        { title: 'Planificación', description: 'Calcula la trayectoria, velocidad y maniobras más seguras y eficientes, tomando miles de decisiones por segundo.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7" /></svg> },
    ];
    return (
        <section id="software" className="scroll-mt-20 py-12">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">El Software: La Inteligencia detrás del Volante</h3>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <div className="text-center flex flex-col items-center max-w-xs">
                            <SoftwareIcon>{step.icon}</SoftwareIcon>
                            <h4 className="text-xl font-bold text-green-400 mb-2">{step.title}</h4>
                            <p className="text-blue-200/80">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && <div className="text-green-400 text-4xl font-thin hidden md:block">&rarr;</div>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

const ChallengesDilemmas = () => {
    const items = [
        { title: 'Situaciones Impredecibles', description: 'Manejar "edge cases" como un balón en la carretera o el comportamiento errático de otros conductores.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 5.636l12.728 12.728" /></svg> },
        { title: 'Clima Adverso', description: 'La lluvia, nieve o niebla pueden afectar gravemente el rendimiento de los sensores LiDAR y las cámaras.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
        { title: 'Ciberseguridad', description: 'Proteger el sistema de ataques maliciosos que puedan tomar el control del vehículo es una prioridad absoluta.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
        { title: 'El Dilema del Tranvía', description: 'Decisiones éticas en accidentes inevitables: ¿proteger a los ocupantes o a los peatones? Un complejo debate moral y legal.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    ];
    return (
        <section id="desafios-y-dilemas-eticos" className="scroll-mt-20 py-12">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">Desafíos y Dilemas Éticos</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {items.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg flex items-start gap-4">
                        <ChallengeIcon>{item.icon}</ChallengeIcon>
                        <div>
                            <h4 className="text-xl font-bold text-red-400 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const FutureOfAutonomy = () => {
    const items = [
        { title: 'Seguridad Vial', description: 'Con más del 90% de los accidentes causados por errores humanos, los vehículos autónomos tienen el potencial de salvar millones de vidas.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
        { title: 'Rediseño de las Ciudades', description: 'Menos aparcamientos liberarán espacio para parques y zonas peatonales, y el tráfico se optimizará para reducir la congestión.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M5 6h14M5 11h14M5 16h14" /></svg> },
        { title: 'Nuevos Modelos de Movilidad', description: 'Flotas de "robotaxis" compartidos y bajo demanda podrían hacer el transporte más barato y accesible para todos.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.5-1.5L9 17l2.5-1.5L13 16z" /></svg> },
        { title: 'Inclusión', description: 'Brindará una nueva independencia a personas mayores o con discapacidad que no pueden conducir.', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    ];
    return (
        <section id="futuro" className="scroll-mt-20 py-12">
            <h3 className="text-3xl font-bold text-center text-cyan-300 mb-12">El Futuro Impulsado por la Autonomía</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {items.map(item => (
                    <div key={item.title} className="glass-pane p-6 rounded-lg flex items-start gap-4">
                        <FutureIcon>{item.icon}</FutureIcon>
                        <div>
                            <h4 className="text-xl font-bold text-purple-400 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


const ConduccionAutonomaPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Conducción Autónoma: La Siguiente Frontera de la Movilidad 🚗💨</h1>
        <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
          Una revolución en marcha que promete transformar la seguridad vial, la planificación urbana y nuestra relación con el transporte.
        </p>
      </header>

      <main>
        <AutomationLevels />
        <KeyTechnology />
        <SoftwareIntelligence />
        <ChallengesDilemmas />
        <FutureOfAutonomy />
      </main>

      <footer className="text-center py-12">
        <p className="text-blue-200/80">
          La transición será gradual, pero la conducción autónoma ya no es ciencia ficción. Es una tecnología en desarrollo activo que está destinada a redefinir nuestra forma de movernos por el mundo.
        </p>
      </footer>
    </div>
  );
};

export default ConduccionAutonomaPage;