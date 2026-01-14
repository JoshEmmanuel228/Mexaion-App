import React from 'react';
import { TopicCard } from '@/components/TopicCard';

// Helper to generate IDs from titles
const generateId = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

const operacionesTopics = [
  {
    topicNumber: 1,
    title: 'Operaciones Puntuales',
    concept: 'Modifican cada píxel basándose únicamente en su propio valor original, sin tener en cuenta a sus vecinos.',
    details: (
      <>
        <h4>Ajustes de Brillo y Contraste</h4>
        <ul>
            <li><strong>Brillo:</strong> Es una simple operación de suma o resta. Aumentar el brillo suma un valor constante a cada píxel, desplazando todo el histograma.</li>
            <li><strong>Contraste:</strong> Es una operación de multiplicación. Aumentar el contraste multiplica el valor de cada píxel por un factor, estirando el histograma.</li>
        </ul>
        <h4>Umbralización (Binarización)</h4>
        <p>Es el proceso de simplificación más radical. Se elige un valor de umbral y se aplica una regla: si el valor del píxel es mayor que el umbral, se convierte en blanco (255); si es menor, se convierte en negro (0). Es un paso crucial para la segmentación.</p>
        <h4>Operaciones Aritméticas y Lógicas</h4>
        <p>Podemos tratar las imágenes como matrices y realizar operaciones entre ellas.</p>
        <ul>
            <li><strong>Aritméticas (Suma, Resta):</strong> La resta es fundamental para la detección de movimiento o cambios entre dos imágenes.</li>
            <li><strong>Lógicas (AND, OR, XOR, NOT):</strong> Se usan sobre imágenes binarias y son clave para tareas de enmascaramiento.</li>
        </ul>
      </>
    )
  },
  {
    topicNumber: 2,
    title: 'Filtros y Convolución',
    concept: 'El poder del vecindario. Modifican cada píxel basándose en los valores de los píxeles que lo rodean.',
    details: (
      <>
        <p>Imagina un pequeño "cristal mágico" llamado <strong>kernel</strong> (o máscara). Este kernel es una pequeña matriz de números (ej. 3x3). La convolución es el proceso de deslizar este kernel sobre cada píxel de la imagen, multiplicar sus valores por los de los píxeles que cubre, sumar los resultados y asignar ese valor al píxel central en la nueva imagen.</p>
        <h4>Filtros de Suavizado (Pasa-bajas)</h4>
        <p>Su objetivo es reducir el ruido y el detalle. El <strong>Filtro de Promedio</strong> crea un desenfoque simple. El <strong>Filtro Gaussiano</strong> es más inteligente, produciendo un desenfoque más natural y eficaz contra el ruido.</p>
        <h4>Filtros de Realce de Bordes (Pasa-altas)</h4>
        <p>Resaltan áreas con cambios bruscos de intensidad. Los filtros de <strong>Sobel, Prewitt y Scharr</strong> calculan el gradiente para encontrar bordes. El <strong>Detector de Bordes de Canny</strong> es el algoritmo de referencia, usando un proceso de múltiples pasos para obtener bordes limpios y conectados.</p>
        <h4>Filtros No Lineales</h4>
        <p>El <strong>Filtro de Mediana</strong> ordena los píxeles vecinos y elige el valor del medio. Es extraordinariamente eficaz para eliminar ruido de "sal y pimienta".</p>
      </>
    )
  },
  {
    topicNumber: 3,
    title: 'Morfología Matemática',
    concept: 'Analiza y procesa la geometría y la forma de los objetos en una imagen, usualmente binaria.',
    details: (
      <>
        <h4>Operaciones Fundamentales</h4>
        <ul>
            <li><strong>Erosión:</strong> "Erosiona" o encoge los límites de los objetos blancos. Útil para eliminar pequeños puntos de ruido y para separar objetos que están ligeramente conectados.</li>
            <li><strong>Dilatación:</strong> "Dilata" o expande los límites de los objetos blancos. Útil para rellenar pequeños agujeros dentro de los objetos y para conectar componentes cercanos.</li>
        </ul>
        <h4>Operaciones Compuestas</h4>
        <ul>
            <li><strong>Apertura (Opening):</strong> Una erosión seguida de una dilatación. Suaviza los contornos y elimina el ruido blanco externo.</li>
            <li><strong>Cierre (Closing):</strong> Una dilatación seguida de una erosión. Rellena pequeños agujeros negros dentro de los objetos.</li>
        </ul>
      </>
    )
  },
  {
    topicNumber: 4,
    title: 'Análisis y Segmentación de Imágenes',
    concept: 'El proceso de dividir una imagen en sus partes constituyentes para simplificar su análisis.',
    details: (
      <>
        <h4>Etiquetado de Componentes Conexas</h4>
        <p>Este algoritmo escanea una imagen binaria y le asigna una "etiqueta" (un número o color único) a cada grupo de píxeles blancos que están conectados entre sí. Es, en esencia, la forma en que una computadora "cuenta" cuántos objetos distintos hay en una escena.</p>
        <h4>Detección de Contornos</h4>
        <p>Una vez que los objetos han sido segmentados, el algoritmo de detección de contornos traza una curva a lo largo del límite de cada objeto. El resultado es una lista de puntos que definen el perímetro de cada forma, útil para el reconocimiento de formas y la medición de propiedades geométricas.</p>
      </>
    )
  }
];

export default function OperacionesTab() {
  return (
    <div className="space-y-6">
      {operacionesTopics.map((topic, index) => (
        <div key={index} id={generateId(topic.title)} className="scroll-mt-24">
            <TopicCard {...topic}>
              {topic.details}
            </TopicCard>
        </div>
      ))}
    </div>
  );
}