'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const mainLinks = [
    { name: 'Laboratorio de Visión Artificial', href: '/laboratorio-vision' },
    { name: 'Cosmos y Universo', href: '/cosmos-universo' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Soluciones', href: '/soluciones' },
];

const navItems = [
  {
    name: 'Las 7 Biorutas',
    href: '/biorutas',
    subItems: [
      { name: '1. Nutrición', href: '/biorutas/nutricion' },
      { name: '2. Ejercicio Físico', href: '/biorutas/ejercicio' },
      { name: '4. Salud Mental', href: '/biorutas/mental' },
      { name: '5. Estados de Conciencia', href: '/biorutas/consciencia' },
      { name: '6. Salud del Planeta', href: '/biorutas/planeta' },
      { name: '7. Amor y Felicidad', href: '/biorutas/amor' },
    ],
  },
  {
    name: 'Visión Artificial',
    href: '/vision-artificial',
    subItems: [
        { name: '1. Clasificación', href: '/vision-artificial#clasificacion-de-imagenes' },
        { name: '2. Detección de Objetos', href: '/vision-artificial#deteccion-de-objetos' },
        { name: '3.1 Segmentación Semántica', href: '/vision-artificial#segmentacion-semantica' },
        { name: '3.2 Segmentación de Instancias', href: '/vision-artificial#segmentacion-de-instancias' },
        { name: '3.3 Segmentación Panóptica', href: '/vision-artificial#segmentacion-panoptica' },
        { name: '4. Reconocimiento Facial', href: '/vision-artificial#reconocimiento-facial' },
        { name: '5. Estimación de Pose', href: '/vision-artificial#estimacion-de-pose-humana' },
        { name: '6. Generación de Imágenes', href: '/vision-artificial#generacion-y-manipulacion-de-imagenes' },
        { name: '7. Visión 3D', href: '/vision-artificial#vision-3d-y-reconstruccion-de-escenas' },
        { name: '8. Seguimiento de Objetos', href: '/vision-artificial#seguimiento-de-objetos-(tracking)' },
        { name: '9. OCR', href: '/vision-artificial#reconocimiento-optico-de-caracteres-(ocr)' },
        { name: '10. Análisis de Video', href: '/vision-artificial#analisis-de-video' },
        { name: '11. Edge AI', href: '/vision-artificial#edge-ai-y-vision-embebida' },
        { name: '12. Búsqueda Visual', href: '/vision-artificial#busqueda-visual' },
    ],
  },
  {
    name: 'Procesamiento Digital de Imágenes',
    href: '/procesamiento-imagenes',
    subItems: [
      { name: 'Fundamentos', href: '/procesamiento-imagenes#fundamentos' },
      { name: 'Operaciones Puntuales', href: '/procesamiento-imagenes#operaciones-puntuales' },
      { name: 'Filtros y Convolución', href: '/procesamiento-imagenes#filtros-y-convolucion' },
      { name: 'Morfología Matemática', href: '/procesamiento-imagenes#morfologia-matematica' },
      { name: 'Análisis y Segmentación', href: '/procesamiento-imagenes#analisis-y-segmentacion-de-imagenes' },
      { name: 'Glosario', href: '/procesamiento-imagenes#glosario' },
    ],
  },
  {
    name: 'Conducción Autónoma',
    href: '/conduccion-autonoma',
    subItems: [
      { name: 'Niveles de Automatización', href: '/conduccion-autonoma#niveles-de-automatizacion' },
      { name: 'La Tecnología Clave', href: '/conduccion-autonoma#tecnologia-clave' },
      { name: 'El Software', href: '/conduccion-autonoma#software' },
      { name: 'Desafíos y Dilemas Éticos', href: '/conduccion-autonoma#desafios-y-dilemas-eticos' },
      { name: 'El Futuro', href: '/conduccion-autonoma#futuro' },
    ],
  },
  {
    name: 'Finanzas y Ciberseguridad',
    href: '/finanzas-ciberseguridad',
    subItems: [
      { name: 'Revolución FinTech', href: '/finanzas-ciberseguridad#fintech' },
      { name: 'Pilares FinTech', href: '/finanzas-ciberseguridad#pilares-fintech' },
      { name: 'Defensa Digital', href: '/finanzas-ciberseguridad#ciberseguridad' },
      { name: 'Panorama de Amenazas', href: '/finanzas-ciberseguridad#amenazas' },
      { name: 'Pilares de Ciberdefensa', href: '/finanzas-ciberseguridad#ciberdefensa' },
    ],
  },
  {
    name: 'Infraestructura Inteligente',
    href: '/infraestructura-inteligente',
    subItems: [
      { name: 'Componentes Clave', href: '/infraestructura-inteligente#componentes' },
      { name: 'Aplicaciones', href: '/infraestructura-inteligente#aplicaciones' },
      { name: 'Beneficios y Desafíos', href: '/infraestructura-inteligente#beneficios-desafios' },
    ],
  },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAnchorLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#');

    if (pathname === path && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className={`h-screen glass-pane text-white p-4 fixed top-0 left-0 flex flex-col z-10 transition-all duration-300 ease-in-out ${isOpen ? 'w-72' : 'w-20'}`}>
      <div className="mb-8 text-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-green-400">Me</span><span className="text-white">xai</span><span className="text-red-500">on</span>
        </Link>
      </div>
      
      <div className={`transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex-grow overflow-y-auto" style={{height: 'calc(100vh - 150px)'}}>
          <ul>
            {mainLinks.map((item) => (
                <li key={item.name} className="mb-2">
                    <Link 
                      href={item.href} 
                      className="block font-bold p-2 rounded-md hover:bg-blue-400/20"
                      onClick={(e) => handleAnchorLinkClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                </li>
            ))}
          </ul>
          <hr className="my-4 border-blue-400/30" />
          <ul>
            {navItems.map((item, index) => (
              <li key={item.name} className="mb-1">
                <div className="flex justify-between items-center cursor-pointer p-2 rounded-md hover:bg-blue-400/20" onClick={() => handleToggle(index)}>
                  <Link 
                    href={item.href}
                    className="flex-grow font-semibold text-sm"
                    onClick={(e) => handleAnchorLinkClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && <ChevronIcon isOpen={openIndex === index} />}
                </div>
                {item.subItems && openIndex === index && (
                  <ul className="pl-4 mt-1 border-l border-blue-400/30">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name} className="mb-1 mt-1">
                        <Link 
                          href={subItem.href} 
                          className="block text-xs hover:text-cyan-300 transition-colors"
                          onClick={(e) => handleAnchorLinkClick(e, subItem.href)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <hr className="my-4 border-blue-400/30" />
          <Link href="/sobre-mi" className="block hover:text-cyan-300 transition-colors text-sm">
            Conoce más sobre la empresa
          </Link>
        </div>
        <div className="mt-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full flex items-center justify-center p-2 rounded-md hover:bg-blue-400/20 transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
