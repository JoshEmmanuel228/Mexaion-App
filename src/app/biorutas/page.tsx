'use client';

import React from 'react';
import Link from 'next/link';

// --- Generic Icon & Card Components ---
const IconWrapper = ({ className, children }: { className: string, children: React.ReactNode }) => (
  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${className}`}>{children}</div>
);

const SectionCard = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
    <div id={id} className="glass-pane-light p-6 sm:p-8 rounded-lg mb-8 scroll-mt-20">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">{title}</h2>
        <div className="prose prose-invert max-w-none text-blue-200/90 text-lg">
            {children}
        </div>
    </div>
);

const BiorutaPill = ({ name, color }: { name: string, color: string }) => (
    <div className={`px-4 py-2 rounded-full text-center font-bold text-sm md:text-base ${color}`}>
        {name}
    </div>
);

// --- Page Component ---
export default function BiorutasPage() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      <header className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 animate-pulse">Simbiosis Estratégica: Las 7 Biorutas</h1>
        <p className="text-lg text-blue-300 mt-4 max-w-3xl mx-auto">
          La IA como arquitectura de integración para la salud holística, el bienestar y la sostenibilidad.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-4 mb-16">
        <Link href="/biorutas/nutricion"><BiorutaPill name="Nutrición" color="bg-green-500/20 text-green-300" /></Link>
        <Link href="/biorutas/ejercicio"><BiorutaPill name="Ejercicio" color="bg-orange-500/20 text-orange-300" /></Link>
        <Link href="/biorutas/amor"><BiorutaPill name="Amor y Felicidad" color="bg-pink-500/20 text-pink-300" /></Link>
        <Link href="/biorutas/mental"><BiorutaPill name="Salud Mental" color="bg-purple-500/20 text-purple-300" /></Link>
        <Link href="/biorutas/consciencia"><BiorutaPill name="Conciencia" color="bg-indigo-500/20 text-indigo-300" /></Link>
        <Link href="/biorutas/planeta"><BiorutaPill name="Salud Planeta" color="bg-teal-500/20 text-teal-300" /></Link>
        <Link href="/biorutas#gobernanza"><BiorutaPill name="IA Ética" color="bg-gray-500/20 text-gray-300" /></Link>
      </div>

      <SectionCard id="resumen" title="I. Resumen Ejecutivo y Marco Conceptual">
        <p>El concepto de "Las 7 Biorutas" establece un marco de salud y longevidad basado en la interdependencia de siete dominios críticos. Gestionar y optimizar estas dimensiones simultáneamente excede la capacidad de los modelos tradicionales. La Inteligencia Artificial (IA) emerge como la arquitectura de integración esencial para el bienestar holístico.</p>
        <p>La función de la IA en este ecosistema trasciende la mera mejora de tareas aisladas, adoptando el rol de arquitecto de la convergencia holística. Al gestionar flujos de datos continuos, la IA puede modelar las correlaciones cruzadas, transformándose de un simple optimizador a un integrador sistémico cuyo objetivo es crear un perfil de salud digital hiper-personalizado.</p>
      </SectionCard>

      <SectionCard id="gobernanza" title="V. Gobernanza, Riesgos y Estrategia Regulatoria (La Bioruta Ética Transversal)">
        <p>La ética actúa como el marco de referencia esencial para la sostenibilidad y la confianza pública en la simbiosis IA-Biorutas. La implementación irresponsable puede exacerbar las disparidades en salud.</p>
        
        <h3 className="text-2xl font-semibold text-white my-6">Desafíos Éticos Transversales</h3>
        <div className="overflow-x-auto glass-pane p-4 rounded-lg">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-black/30">
                <tr>
                  <th className="p-3 text-left font-bold text-cyan-300">Desafío Ético</th>
                  <th className="p-3 text-left font-bold text-cyan-300">Biorutas Afectadas</th>
                  <th className="p-3 text-left font-bold text-cyan-300">Riesgo Específico</th>
                  <th className="p-3 text-left font-bold text-cyan-300">Mitigación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-blue-400/20">
                  <td className="p-3">Privacidad y Seguridad</td>
                  <td className="p-3">Nutrición, Salud Mental, Conciencia</td>
                  <td className="p-3">Uso indebido de datos multi-ómicos y emocionales sensibles.</td>
                  <td className="p-3">Marcos de Gobernanza de Datos (GDPR/HIPAA).</td>
                </tr>
                <tr className="border-t border-blue-400/20">
                  <td className="p-3">Sesgo Algorítmico</td>
                  <td className="p-3">Nutrición, Ejercicio, Salud Mental</td>
                  <td className="p-3">Disparidad en resultados por subrepresentación de grupos.</td>
                  <td className="p-3">Auditorías de algoritmos y fomento de la equidad en datos.</td>
                </tr>
                <tr className="border-t border-blue-400/20">
                  <td className="p-3">Equidad en el Acceso</td>
                  <td className="p-3">Todas</td>
                  <td className="p-3">Agravar disparidades socioeconómicas en el acceso a tecnologías.</td>
                  <td className="p-3">Políticas de inclusión y subsidios para democratizar herramientas.</td>
                </tr>
                <tr className="border-t border-blue-400/20">
                  <td className="p-3">Responsabilidad</td>
                  <td className="p-3">Ejercicio, Salud Mental, Conciencia</td>
                  <td className="p-3">Dificultad para asignar responsabilidad en errores de la IA.</td>
                  <td className="p-3">Clarificación de marcos regulatorios para la autonomía de la IA.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6">El sesgo algorítmico puede surgir de datos de entrenamiento incompletos. Si los grupos minoritarios están subrepresentados, los algoritmos pueden generar resultados erróneos. La creciente autonomía de la IA en la toma de decisiones clínicas introduce el desafío de la rendición de cuentas. La confianza pública depende de la existencia de mecanismos claros para determinar la responsabilidad en caso de error.</p>
      </SectionCard>

      <SectionCard id="conclusiones" title="VI. Conclusiones y Hoja de Ruta Estratégica">
        <p>La IA es el motor unificador que permite la gestión simultánea y personalizada de "Las 7 Biorutas", trasladando la atención sanitaria de un modelo reactivo a uno predictivo. El éxito a largo plazo de esta integración estará determinado por la solidez y equidad de sus marcos éticos y regulatorios.</p>
        
        <h3 className="text-2xl font-semibold text-white my-6">Recomendaciones Estratégicas</h3>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-pane p-6 rounded-lg">
                <h4 className="font-bold text-lg text-green-400 mb-2">1. Mandato de Inclusividad</h4>
                <p>Inversión directa para expandir la recopilación de datos en regiones subrepresentadas para fomentar la equidad en los datos de entrenamiento.</p>
            </div>
            <div className="glass-pane p-6 rounded-lg">
                <h4 className="font-bold text-lg text-green-400 mb-2">2. Estandarización del Modelo Híbrido</h4>
                <p>Establecer protocolos que obliguen a la supervisión profesional en Biorutas de alta sensibilidad como la Salud Mental, asegurando que la IA actúe como apoyo.</p>
            </div>
            <div className="glass-pane p-6 rounded-lg">
                <h4 className="font-bold text-lg text-green-400 mb-2">3. Priorización Regulatoria</h4>
                <p>Desarrollar marcos regulatorios claros y adaptables que definan la responsabilidad en la toma de decisiones automatizadas.</p>
            </div>
        </div>
      </SectionCard>

    </main>
  );
}
