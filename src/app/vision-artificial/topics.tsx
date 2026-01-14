import React from 'react';

export const topics = [
  {
    title: 'Clasificación de Imágenes',
    concept: 'El "Qué" Fundamental. Asigna una única etiqueta a una imagen completa, respondiendo: ¿Qué es lo principal en esta imagen?',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>El cerebro de esta tarea son las Redes Neuronales Convolucionales (CNNs). Inspiradas en la corteza visual humana, estas redes no memorizan imágenes, sino que aprenden la "esencia" de los objetos mediante la identificación de jerarquías de patrones, desde bordes y texturas simples hasta formas complejas.</p>
        <h4>Arquitecturas Clave</h4>
        <p><strong>Históricas:</strong> LeNet-5, AlexNet, VGG. <br/><strong>Modernas:</strong> ResNet, Inception, EfficientNet, Vision Transformers (ViT).</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Medicina:</strong> Diagnóstico automático de enfermedades a partir de radiografías.</li>
          <li><strong>E-commerce:</strong> Categorización automática de productos en catálogos masivos.</li>
          <li><strong>Agricultura:</strong> Identificación de tipos de cultivos o detección de enfermedades.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Detección de Objetos',
    concept: 'El "Qué" y el "Dónde". Localiza y clasifica múltiples objetos simultáneamente con un cuadro delimitador (bounding box).',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Se usan CNNs avanzadas. Los modelos de dos etapas (Faster R-CNN) ofrecen alta precisión, mientras que los de una etapa (YOLO, SSD) priorizan la velocidad para análisis en tiempo real.</p>
        <h4>Arquitecturas Clave</h4>
        <p><strong>Familia R-CNN:</strong> Fast R-CNN, Faster R-CNN. <br/><strong>Familia YOLO:</strong> Todas sus versiones. <br/><strong>Otros:</strong> SSD, RetinaNet.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Vehículos Autónomos:</strong> Identificación de peatones, coches y señales de tráfico.</li>
          <li><strong>Seguridad y Vigilancia:</strong> Detección de intrusos o conteo de multitudes.</li>
          <li><strong>Retail:</strong> Análisis de estanterías para control de inventario.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Segmentación Semántica',
    concept: 'El arte de "colorear" una imagen. Asigna una categoría a cada píxel, sin distinguir entre instancias individuales.',
    details: (
        <>
            <h4>La Sinergia con la IA</h4>
            <p>Se usan arquitecturas de "codificador-decodificador" (Encoder-Decoder). El codificador, típicamente una CNN, comprime la imagen en un vector de características que captura el contexto. El decodificador reconstruye la imagen a partir de este vector, pero en lugar de reconstruir los colores originales, asigna una etiqueta de clase a cada píxel.</p>
            <h4>Arquitecturas Clave</h4>
            <p>FCN (Fully Convolutional Network), U-Net (muy popular en imágenes médicas), DeepLab.</p>
            <h4>Simbiosis en Acción</h4>
            <ul>
                <li><strong>Imágenes Médicas:</strong> Delimitación precisa de tumores y órganos en resonancias magnéticas.</li>
                <li><strong>Análisis Geoespacial:</strong> Clasificación de uso del suelo a partir de imágenes satelitales.</li>
                <li><strong>Conducción Autónoma:</strong> Identificación de las áreas transitables de la carretera.</li>
            </ul>
        </>
    ),
  },
  {
    title: 'Segmentación de Instancias',
    concept: 'Fusión de detección y segmentación. Define el contorno exacto de cada instancia individual de un objeto.',
    details: (
        <>
            <h4>La Sinergia con la IA</h4>
            <p>El enfoque dominante, popularizado por Mask R-CNN, es una estrategia de "detectar y luego segmentar". Primero, un detector de objetos identifica la ubicación de cada objeto. Luego, una segunda red genera una máscara de segmentación precisa solo para ese objeto.</p>
            <h4>Arquitecturas Clave</h4>
            <p>Mask R-CNN, YOLACT, SOLO (Segmenting Objects by Location).</p>
            <h4>Simbiosis en Acción</h4>
            <ul>
                <li><strong>Robótica (Bin Picking):</strong> Permite a un brazo robótico agarrar un objeto específico en un contenedor desordenado.</li>
                <li><strong>Análisis Biológico:</strong> Conteo y medición individual de células en imágenes de microscopía.</li>
                <li><strong>Realidad Aumentada:</strong> Aplicación de efectos visuales a personas u objetos específicos.</li>
            </ul>
        </>
    ),
  },
  {
    title: 'Segmentación Panóptica',
    concept: 'La unificación total. Asigna a cada píxel una clase semántica y un identificador de instancia.',
    details: (
        <>
            <h4>La Sinergia con la IA</h4>
            <p>Las arquitecturas modernas tienen dos "cabezas": una para la segmentación semántica (fondo) y otra para la de instancias (objetos), fusionando luego los resultados para una comprensión completa de la escena.</p>
            <h4>Arquitecturas Clave</h4>
            <p>Panoptic FPN, UPSNet, Panoptic-DeepLab.</p>
            <h4>Simbiosis en Acción</h4>
            <ul>
                <li><strong>Conducción Autónoma Holística:</strong> El vehículo entiende que "peatón 1" está sobre la "acera", al lado de la "carretera".</li>
                <li><strong>Análisis de Escenas Urbanas:</strong> Mapeo detallado de ciudades para planificación urbana.</li>
            </ul>
        </>
    ),
  },
  {
    title: 'Reconocimiento Facial',
    concept: 'Tecnología biométrica que identifica o verifica a una persona convirtiendo su rostro en una firma matemática única.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Redes neuronales profundas (Siamese Networks, Triplet Loss, ArcFace) mapean rostros a un espacio vectorial donde las caras de la misma persona están muy cerca y las de personas diferentes, muy lejos.</p>
        <h4>Arquitecturas Clave</h4>
        <p>FaceNet (Google), DeepFace (Facebook), ArcFace.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Seguridad:</strong> Desbloqueo de dispositivos y control de acceso.</li>
          <li><strong>Finanzas:</strong> Autenticación para transacciones bancarias.</li>
          <li><strong>Social Media:</strong> Etiquetado automático de personas.</li>
        </ul>
      </>
    ),
  },
    {
    title: 'Estimación de Pose Humana',
    concept: 'Detecta y localiza las articulaciones clave del cuerpo humano, creando un "esqueleto" digital que representa la postura.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Modelos como OpenPose o HRNet utilizan CNNs para generar "mapas de calor" (heatmaps) que indican la probabilidad de una articulación en cada píxel, y "campos de afinidad" que conectan esas articulaciones.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Deportes y Fitness:</strong> Análisis de técnica o corrección de posturas.</li>
          <li><strong>Animación y Videojuegos:</strong> Captura de movimiento (MoCap) sin trajes especiales.</li>
          <li><strong>Interacción Humano-Computadora:</strong> Control de interfaces mediante gestos.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Generación y Manipulación de Imágenes',
    concept: 'Crea imágenes nuevas y fotorrealistas a partir de texto o bocetos, y realiza edición inteligente.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Las Redes Generativas Antagónicas (GANs) y los Modelos de Difusión son las tecnologías dominantes. Las GANs usan un "generador" y un "discriminador" en competencia. Los Modelos de Difusión aprenden a revertir un proceso de añadir ruido.</p>
        <h4>Arquitecturas Clave</h4>
        <p>GANs, StyleGAN, DALL-E 2, Midjourney, Stable Diffusion.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Arte y Diseño:</strong> Creación de obras de arte y prototipos de productos.</li>
          <li><strong>Ciencia:</strong> Generación de datos sintéticos para entrenar otros modelos.</li>
          <li><strong>Entretenimiento:</strong> Creación de efectos visuales y personajes digitales.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Visión 3D y Reconstrucción de Escenas',
    concept: 'Infiere la estructura tridimensional del mundo a partir de imágenes 2D.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Técnicas como Stereo Vision usan redes neuronales para encontrar correspondencias entre dos imágenes. NeRFs (Neural Radiance Fields) aprenden una representación 3D continua de una escena, permitiendo vistas fotorrealistas desde cualquier ángulo.</p>
        <h4>Tecnologías Clave</h4>
        <p>Stereo Vision, Structure from Motion (SfM), SLAM, LiDAR, NeRFs.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Robótica y Drones:</strong> Navegación autónoma y evasión de obstáculos.</li>
          <li><strong>Realidad Virtual y Aumentada:</strong> Creación de "gemelos digitales" de entornos reales.</li>
          <li><strong>Medicina:</strong> Reconstrucción 3D de órganos a partir de tomografías.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Seguimiento de Objetos (Tracking)',
    concept: 'Asigna una identidad única a un objeto y sigue su trayectoria a lo largo de un video.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Combina detectores de objetos con algoritmos de predicción (Filtro de Kalman) y modelos de apariencia (DeepSORT) para re-identificar un objeto si desaparece.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Análisis Deportivo:</strong> Seguir la trayectoria del balón y de los jugadores.</li>
          <li><strong>Tráfico:</strong> Monitoreo del flujo vehicular y análisis de congestión.</li>
          <li><strong>Interacción:</strong> Seguir las manos o los ojos de un usuario para controlar una interfaz.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Reconocimiento Óptico de Caracteres (OCR)',
    concept: 'Convierte imágenes de texto en texto digital editable y buscable.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Usa CNNs para extraer características visuales y RNNs o Transformers para interpretar la secuencia de caracteres, entendiendo el contexto del lenguaje.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Banca y Finanzas:</strong> Digitalización automática de cheques y facturas.</li>
          <li><strong>Logística:</strong> Lectura de matrículas o números de serie.</li>
          <li><strong>Accesibilidad:</strong> Lectura de textos en voz alta para personas con discapacidad visual.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Análisis de Video',
    concept: 'Comprende acciones y eventos en un video, respondiendo a la pregunta "¿Qué está sucediendo?".',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Utiliza arquitecturas 3D-CNNs, que aplican convoluciones en el espacio y en el tiempo para aprender patrones de movimiento. Los Transformers de Visión también se están adaptando para esta tarea.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Seguridad:</strong> Detección automática de comportamientos anómalos o violentos.</li>
          <li><strong>Retail:</strong> Análisis de cómo los clientes interactúan con los productos.</li>
          <li><strong>Indexación de Medios:</strong> Búsqueda de videos por contenido.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Edge AI y Visión Embebida',
    concept: 'Ejecuta modelos de visión directamente en dispositivos de bajo consumo en lugar de depender de la nube.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Implica el uso de redes neuronales ligeras (MobileNet) y técnicas de optimización como la cuantización y la poda para que los modelos corran rápidamente en hardware modesto.</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>Hogar Inteligente:</strong> Cámaras que procesan alertas localmente para mayor privacidad.</li>
          <li><strong>Industria 4.0:</strong> Detección de defectos en la línea de producción en tiempo real.</li>
          <li><strong>Dispositivos Médicos Portátiles:</strong> Análisis de datos biométricos al instante.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Búsqueda Visual',
    concept: 'Permite usar una imagen como consulta para encontrar imágenes visualmente similares en una base de datos.',
    details: (
      <>
        <h4>La Sinergia con la IA</h4>
        <p>Utiliza CNNs para extraer un "vector de características" (embedding) de la imagen. Luego, el sistema busca los vectores más cercanos usando algoritmos de búsqueda de vecino más cercano de alta velocidad (FAISS).</p>
        <h4>Simbiosis en Acción</h4>
        <ul>
          <li><strong>E-commerce:</strong> "Busca por imagen" para encontrar productos similares.</li>
          <li><strong>Investigación Forense:</strong> Búsqueda de personas o logos en grandes volúmenes de video.</li>
          <li><strong>Redes Sociales:</strong> Detección de plagio de contenido visual.</li>
        </ul>
      </>
    ),
  },
];