
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function QuantumBackground() {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          {/* Más estrellas, mayor factor para efecto más denso y brillante */}
          <Stars radius={150} depth={80} count={9000} factor={6} saturation={2} fade speed={1} />
        </Canvas>
        {/* Overlay galáctico con gradiente y neón */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(60,250,255,0.12) 0%, rgba(162,89,255,0.10) 40%, transparent 80%)',
          boxShadow: '0 0 80px 20px #3cfaff44, 0 0 240px 80px #a259ff22',
          zIndex: 1
        }} />
      </div>
    </>
  );
}
