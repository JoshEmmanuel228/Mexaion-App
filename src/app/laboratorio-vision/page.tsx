'use client';

import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';

const labItems = [
    {
        name: 'Generador de Imágenes',
        description: 'Aplicación web interactiva para crear visualizaciones de galaxias y nebulosas. Integrada directamente en el portal para su uso inmediato.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '/generador-de-imagenes',
        imageUrl: '/cover-generator.jpg',
        target: '_blank'
    },
    {
        name: 'El Ojo Digital',
        description: 'Suite de herramientas web para el análisis y manipulación de imágenes. Aplica filtros y algoritmos de PDI en tiempo real desde el navegador.',
        tech: ['Flask', 'Python', 'OpenCV', 'HTML'],
        link: 'http://127.0.0.1:5000',
        imageUrl: '/cover-pdi.png',
        target: '_blank'
    }
];

export default function LaboratorioVisionPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-white">
      <div className="text-center w-full max-w-6xl">
        <header className="py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">LABORATORIO DE VISIÓN IA</h1>
            <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
                Experimenta el poder de la inteligencia artificial a través de nuestras herramientas interactivas y demostraciones de visión por computadora.
            </p>
        </header>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {labItems.map(p => (
                <div key={p.name} className="glass-pane p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <ProjectCard {...p} />
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}