import React from 'react';

const glossaryTerms = [
  { term: 'Píxel', definition: 'La unidad más pequeña de una imagen digital, caracterizada por su posición y su valor de color/brillo.' },
  { term: 'Canal', definition: 'Una capa de información en una imagen. Una imagen RGB tiene tres canales (Rojo, Verde, Azul).' },
  { term: 'Resolución', definition: 'Las dimensiones de una imagen, medidas en píxeles (ancho x alto). Determina el nivel de detalle.' },
  { term: 'Histograma', definition: 'Un gráfico que muestra la frecuencia de cada nivel de intensidad (brillo) en una imagen.' },
  { term: 'Espacio de Color', definition: 'Un modelo matemático para representar el color (ej. RGB, HSV).' },
  { term: 'RGB', definition: 'Un espacio de color aditivo basado en la combinación de luces Roja, Verde y Azul. Estándar para pantallas.' },
  { term: 'HSV', definition: 'Un espacio de color basado en Matiz, Saturación y Valor, más alineado con la percepción humana del color.' },
  { term: 'Umbralización', definition: 'El proceso de convertir una imagen en escala de grises a una imagen binaria (blanco y negro).' },
  { term: 'Kernel (o Máscara)', definition: 'Una pequeña matriz de números que se utiliza en la convolución para aplicar un filtro a una imagen.' },
  { term: 'Convolución', definition: 'La operación matemática de deslizar un kernel sobre una imagen para calcular los nuevos valores de los píxeles.' },
  { term: 'Morfología Matemática', definition: 'Un conjunto de técnicas que analizan y modifican la estructura y forma de los objetos.' },
  { term: 'Erosión', definition: 'Operación morfológica que encoge o adelgaza las regiones brillantes de una imagen.' },
  { term: 'Dilatación', definition: 'Operación morfológica que expande o engrosa las regiones brillantes de una imagen.' },
  { term: 'Segmentación', definition: 'El proceso de particionar una imagen en múltiples segmentos u objetos para simplificar su análisis.' },
  { term: 'Matiz (Hue)', definition: 'El atributo que describe un color "puro" (rojo, verde, amarillo, etc.) en el espacio de color HSV.' },
];

export default function GlosarioTab() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-200">Glosario de Términos Clave</h2>
        <p className="mt-2 text-lg">Definiciones rápidas y claras de los conceptos más importantes en PDI.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {glossaryTerms.map((item, index) => (
          <div key={index} className="glass-pane p-4 rounded-lg">
            <h4 className="text-lg font-bold text-cyan-300">{item.term}</h4>
            <p className="text-blue-200/90 mt-1">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
