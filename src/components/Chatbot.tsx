'use client';

import { useEffect, useRef, useState } from 'react';
import ChatbotIcon from './ChatbotIcon';

const Chatbot = () => {
  const [isChatReady, setChatReady] = useState(false);
  const n8nButtonRef = useRef<HTMLButtonElement | null>(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (scriptInjected.current) return;
    scriptInjected.current = true;

    // Inyectar CSS para ocultar el botón original de n8n
    const style = document.createElement('style');
    style.innerHTML = `
      #n8n-chat-widget-container > button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Inyectar la hoja de estilos de n8n
    const link = document.createElement('link');
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inyectar el script principal de n8n
    const script = document.createElement('script');
    script.type = 'module';
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

    // Busca el botón de n8n repetidamente hasta que lo encuentra
    const intervalId = setInterval(() => {
      const button = document.querySelector('#n8n-chat-widget-container > button') as HTMLButtonElement;
      if (button) {
        n8nButtonRef.current = button; // Guarda la referencia al botón
        setChatReady(true); // Marca el chat como listo para mostrar nuestra burbuja
        clearInterval(intervalId); // Detiene la búsqueda
      }
    }, 100); // Revisa cada 100ms

    return () => {
      clearInterval(intervalId);
      document.head.removeChild(style);
    };
  }, []);

  const handleIconClick = () => {
    // Ahora nos aseguramos de que el botón existe antes de hacer clic
    if (n8nButtonRef.current) {
      n8nButtonRef.current.click();
    } else {
      console.error('El botón del chat de n8n no está disponible.');
    }
  };

  // Renderiza la burbuja galáctica solo cuando el chat de n8n esté listo
  return isChatReady ? <ChatbotIcon onClick={handleIconClick} /> : null;
};

export default Chatbot;
