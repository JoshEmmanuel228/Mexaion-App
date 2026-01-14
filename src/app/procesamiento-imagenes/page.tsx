'use client';

import React, { useState, useEffect } from 'react';
import FundamentosTab from '@/components/pdi/FundamentosTab';
import OperacionesTab from '@/components/pdi/OperacionesTab';
import GlosarioTab from '@/components/pdi/GlosarioTab';

const tabs = [
  { id: 'fundamentos', name: 'Fundamentos de PDI' },
  { id: 'operaciones', name: 'Operaciones y Transformaciones' },
  { id: 'glosario', name: 'Glosario de Términos' },
];

// Hashes that should trigger the 'operaciones' tab
const operacionesTopicsHashes = [
    'operaciones-puntuales',
    'filtros-y-convolucion',
    'morfologia-matematica',
    'analisis-y-segmentacion-de-imagenes'
];

export default function ProcesamientoDigitalPage() {
  const [activeTab, setActiveTab] = useState('fundamentos');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (operacionesTopicsHashes.includes(hash)) {
      setActiveTab('operaciones');
    } else if ([...tabs.map(t => t.id)].includes(hash)) {
      setActiveTab(hash);
    }
    // Let the browser handle the scroll after state update and re-render
    setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 text-white min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">Procesamiento Digital de Imágenes (PDI)</h1>
          <p className="text-lg md:text-xl text-blue-200 mt-4 max-w-4xl mx-auto">
            Bienvenido al fascinante mundo del Procesamiento Digital de Imágenes. En esta sección, sentaremos las bases que te permitirán comprender cómo las computadoras "ven" y manipulan el mundo visual.
          </p>
        </div>

        <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-md mb-8 rounded-lg">
          <div className="border-b border-blue-400/30 flex justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold transition-colors duration-300 border-b-4 -mb-px ${ 
                  activeTab === tab.id
                    ? 'text-cyan-300 border-cyan-400'
                    : 'text-blue-300/70 border-transparent hover:text-cyan-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className={activeTab === 'fundamentos' ? '' : 'hidden'}>
            <div id="fundamentos" className="glass-pane p-6 sm:p-8 md:p-12 rounded-lg"><FundamentosTab /></div>
          </div>
          <div className={activeTab === 'operaciones' ? '' : 'hidden'}>
            <div id="operaciones" className="glass-pane p-6 sm:p-8 md:p-12 rounded-lg"><OperacionesTab /></div>
          </div>
          <div className={activeTab === 'glosario' ? '' : 'hidden'}>
            <div id="glosario" className="glass-pane p-6 sm:p-8 md:p-12 rounded-lg"><GlosarioTab /></div>
          </div>
        </div>

      </div>
    </div>
  );
}