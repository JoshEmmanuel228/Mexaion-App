'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface ChatbotIconProps {
  onClick: () => void;
}

function GalacticBubble() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* La esfera principal, ahora oscura y semitransparente */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial 
          color="#1a202c" // Un color azul oscuro, casi negro
          transparent 
          opacity={0.5} 
        />
      </Sphere>
      {/* Los anillos, ahora con un material que emite luz fosforescente */}
      <Torus args={[1.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0.2, 0]}>
        <meshStandardMaterial 
          color="#00f5d4" // Un color verde menta fosforescente
          emissive="#00f5d4" // Hace que el material emita luz de este color
          emissiveIntensity={2} // Intensidad del brillo
        />
      </Torus>
    </group>
  );
}

export default function ChatbotIcon({ onClick }: ChatbotIconProps) {
  return (
    <div 
      className="fixed bottom-8 right-8 w-24 h-24 cursor-pointer z-50"
      onClick={onClick}
      title="Abrir chat de Emma"
    >
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GalacticBubble />
      </Canvas>
    </div>
  );
}