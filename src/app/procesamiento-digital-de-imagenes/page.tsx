
import React from 'react';

const PdiPage = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 4rem)' }}>
      <iframe
        src="http://127.0.0.1:5000"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Procesamiento Digital de Imágenes"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default PdiPage;
