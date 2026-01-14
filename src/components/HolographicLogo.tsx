'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

export default function HolographicLogo() {
  const knotRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (knotRef.current) {
      knotRef.current.rotation.x = elapsedTime / 4;
      knotRef.current.rotation.y = elapsedTime / 2;
    }
  });

  return (
    <group scale={1.5}> {/* Increased scale for more presence */}
      <TorusKnot ref={knotRef} args={[1, 0.2, 256, 32]}>
        <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={2}
            metalness={1}
            roughness={0.1}
            wireframe
        />
      </TorusKnot>
    </group>
  );
}
