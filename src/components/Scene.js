'use client';

import { EffectComposer, Bloom, Noise, SMAA } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Model from "@/components/Model";

export default function Scene({ animationId = 0 }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 4], fov: 50 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[2, 5, 2]}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={10}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.1} />
      </mesh>

      <Model animationId={animationId} />

      <EffectComposer>
        <SMAA />
        <Noise
          premultiply
          opacity={0.04}
        />
      </EffectComposer>
    </Canvas>

  );
}
