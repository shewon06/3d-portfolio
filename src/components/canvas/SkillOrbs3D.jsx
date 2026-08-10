import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, OrbitControls } from '@react-three/drei';

function FloatingSkillOrb({ position, name, color, speed = 1 }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5 * speed;
      meshRef.current.rotation.y += delta * 0.7 * speed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 1.2 * speed;
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speed) * 0.4;
    }
  });

  return (
    <Float speed={2.2 * speed} rotationIntensity={0.8} floatIntensity={1.6}>
      <group
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Core Sphere */}
        <mesh ref={meshRef} scale={hovered ? 1.3 : 1.05}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color={hovered ? '#ffffff' : color}
            metalness={0.85}
            roughness={0.15}
            wireframe={hovered}
            emissive={color}
            emissiveIntensity={hovered ? 1 : 0.4}
          />
        </mesh>

        {/* Orbiting Ring */}
        <mesh ref={ringRef} scale={hovered ? 1.4 : 1.1}>
          <torusGeometry args={[1.0, 0.015, 16, 60]} />
          <meshBasicMaterial color={hovered ? '#00f3ff' : color} transparent opacity={0.7} />
        </mesh>

        <Text
          position={[0, -1.3, 0]}
          fontSize={0.28}
          color={hovered ? '#00f3ff' : '#ffffff'}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/orbitron/v29/yOoB70y9o18FaiJz792d.woff"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

export default function SkillOrbs3D() {
  const skills = [
    { name: 'AI & Automation', color: '#00f3ff', position: [-2.3, 1.1, 0], speed: 1.2 },
    { name: 'Python', color: '#61dafb', position: [0, 1.5, 0.5], speed: 0.9 },
    { name: 'C# / .NET', color: '#a855f7', position: [2.3, 1.1, 0], speed: 1.1 },
    { name: 'SQL & DB', color: '#f59e0b', position: [-1.5, -1.2, 0.3], speed: 1.3 },
    { name: 'JavaScript', color: '#22c55e', position: [1.5, -1.2, 0.3], speed: 1.0 },
  ];

  return (
    <div style={{ width: '100%', height: '360px' }}>
      <Canvas camera={{ position: [0, 0, 5.8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.6} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#a855f7" />

        {skills.map((skill, index) => (
          <FloatingSkillOrb key={index} {...skill} />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
