'use client';

import { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessages: Message[] = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    console.log('API Key:', process.env.NEXT_PUBLIC_GEMINI_API_KEY); // Added for debugging

    try {
                  const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: inputValue,
            }],
          }],
        }),
      });

      console.log('Response:', response); // Added for debugging

      if (!response.ok) {
        throw new Error('Error with Gemini API');
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;

      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { text: 'Lo siento, algo salió mal.', sender: 'bot' }]);
    }
  };

  return (
    <div className="w-80 h-96 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg flex flex-col">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">Emma</h2>
        <button onClick={onClose} className="text-white">&times;</button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow bg-gray-700 text-white rounded-l-lg px-3 py-2 focus:outline-none"
            placeholder="Escribe un mensaje..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}