import React from 'react';

const InfoCard = ({ title, children }) => (
  <div className="glass-pane p-6 rounded-lg h-full">
    <h3 className="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-400/30 pb-2">{title}</h3>
    <div className="prose prose-invert max-w-none text-blue-200/90">
      {children}
    </div>
  </div>
);

export default function FundamentosTab() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-200">¿Qué es una Imagen Digital?</h2>
        <p className="mt-2 text-lg max-w-3xl mx-auto">Una imagen digital, a primera vista, es una simple fotografía. Pero para una computadora, es un universo de datos perfectamente estructurado. Imaginémosla como una hoja de cálculo gigante o un tablero de ajedrez.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <InfoCard title="Píxeles: Los Ladrillos Fundamentales">
          <p>La palabra píxel viene de <strong>Picture Element</strong>. Es la unidad más pequeña e indivisible de una imagen digital. Cada píxel es un pequeño cuadrado con dos propiedades esenciales: su <strong>posición</strong> (su coordenada en la cuadrícula) y su <strong>valor</strong> (que define su color y brillo). Millones de estos pequeños ladrillos se unen para formar la imagen completa.</p>
        </InfoCard>

        <InfoCard title="Canales: Las Capas del Color">
          <p>Para representar el color, se usa un sistema de canales (ej. <strong>RGB</strong>). Piensa en ellos como tres hojas transparentes (Roja, Verde, Azul) que al superponerse, combinan sus valores para crear la gama completa de colores. Una imagen en <strong>escala de grises</strong> es más simple: un solo canal representa la intensidad lumínica (0=negro, 255=blanco).</p>
        </InfoCard>

        <InfoCard title="Resolución: La Dimensión del Detalle">
          <p>Es el tamaño de la cuadrícula de píxeles, expresado como <strong>ancho x alto</strong> (ej. 1920x1080). Más píxeles equivalen a más detalle. Una baja resolución resulta en un aspecto "pixelado" o de bloque, ya que los píxeles individuales son más grandes y visibles.</p>
        </InfoCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="glass-pane p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">El Histograma: El ADN de una Imagen</h3>
            <p className="prose prose-invert max-w-none text-blue-200/90">Es un gráfico de barras que muestra la distribución tonal de la imagen. El eje X representa el rango de intensidad (0-255) y el eje Y la cantidad de píxeles con esa intensidad. Su forma nos revela si la imagen está bien expuesta.</p>
            <ul className="mt-4 space-y-2 prose prose-invert max-w-none text-blue-200/90">
                <li><strong>Cargado a la izquierda:</strong> Imagen oscura (subexpuesta).</li>
                <li><strong>Cargado a la derecha:</strong> Imagen brillante (sobreexpuesta).</li>
                <li><strong>Estrecho en el centro:</strong> Imagen con bajo contraste, "plana" o "lavada".</li>
                <li><strong>Extendido por todo el rango:</strong> Imagen con alto contraste, vibrante y rica en detalles.</li>
            </ul>
        </div>
        <div className="glass-pane p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Espacios de Color</h3>
            <p className="prose prose-invert max-w-none text-blue-200/90">Son "idiomas" para describir un color. Cada uno tiene sus fortalezas:</p>
            <ul className="mt-4 space-y-3 prose prose-invert max-w-none text-blue-200/90">
                <li><strong>RGB (Red, Green, Blue):</strong> Modelo aditivo, ideal para pantallas. No es muy intuitivo para la manipulación.</li>
                <li><strong>Escala de Grises:</strong> Un solo canal para el brillo (luminancia). Fundamental para simplificar operaciones y hacerlas más eficientes.</li>
                <li><strong>HSV (Hue, Saturation, Value):</strong> Muy intuitivo. Separa el <strong>Matiz</strong> (color puro), la <strong>Saturación</strong> (pureza) y el <strong>Valor</strong> (brillo), facilitando tareas como la detección de objetos por color.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
