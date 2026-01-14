'use client';

import { useEffect } from 'react';

const N8nChat = () => {
  useEffect(() => {
    // Previene que el script se añada múltiples veces
    if (document.querySelector('script[data-n8n-chat]')) {
      return;
    }

    const link = document.createElement('link');
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.type = 'module';
    script.setAttribute('data-n8n-chat', 'true'); // Marca para saber que el script ya se añadió
    script.innerHTML = `
      try {
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        createChat({
          webhookUrl: 'http://localhost:5678/webhook/5dfdee47-44ac-40ca-9a28-018f463e3b76/chat',
          chatTitle: 'Emma',
          language: 'es-LA',
        });
      } catch (e) {
        console.error('Failed to load n8n chat:', e);
      }
    `;
    document.body.appendChild(script);

  }, []); // El array vacío asegura que se ejecute solo una vez

  return null; // El componente no renderiza nada por sí mismo
};

export default N8nChat;
