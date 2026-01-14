'use client';

import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
    {
        name: 'Sistema de Semaforización Inteligente',
        description: 'Próximamente: Un sistema de control de tráfico adaptable basado en visión artificial.',
        tech: ['Python', 'OpenCV', 'Hardware'],
        link: '#',
        imageUrl: null
    },
    {
        name: 'Visión Artificial Interactiva',
        description: 'Próximamente: Una plataforma para experimentar con algoritmos de visión en tiempo real.',
        tech: ['Python', 'OpenCV', 'React'],
        link: '#',
        imageUrl: null
    },
    {
        name: 'Radar con Arduino',
        description: 'Próximamente: Un proyecto de hardware para la detección de objetos usando ultrasonido.',
        tech: ['Arduino', 'C++', 'Hardware'],
        link: '#',
        imageUrl: null
    },
    {
        name: 'Basketball Holistico',
        description: 'Próximamente: Un sistema automatizado para llevar el marcador en partidos de baloncesto.',
        tech: ['Python', 'Yolo', 'JavaScript', 'CSS'],
        link: 'http://localhost:3000/',
        imageUrl: null
    },
    {
        name: 'Athena Ball',
        description: 'Próximamente: Un proyecto de visión artificial para análisis de baloncesto.',
        tech: ['Python', 'OpenCV', 'Flask'],
        link: 'http://127.0.0.1:5000',
        imageUrl: null,
        target: '_blank'
    },
    {
        name: 'Segmentación Semántica',
        description: 'Próximamente: Un modelo de deep learning para la clasificación de píxeles en imágenes.',
        tech: ['Python', 'TensorFlow', 'Keras'],
        link: '#',
        imageUrl: null
    }
];

export default function ProyectosPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-white">
      <div className="text-center w-full max-w-7xl">
        <header className="py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">PORTAFOLIO DE PROYECTOS</h1>
            <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
                Una selección de nuestros proyectos de desarrollo, investigación y experimentación en diversas áreas tecnológicas.
            </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => (
                <div key={p.name} className="glass-pane p-1 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <ProjectCard {...p} />
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
