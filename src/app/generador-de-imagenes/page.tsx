
import React from 'react';

const GeneradorDeImagenesPage = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 4rem)' }}>
      <iframe
        src="/generador-de-imagenes/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Generador de Imágenes Galácticas"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default GeneradorDeImagenesPage;
