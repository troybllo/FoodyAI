// app/components/ThreeScene.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import AppleModel from "./models/AppleModel";
import OrangeModel from "./models/OrangeModel";

useGLTF.preload("/models/apple.glb");
useGLTF.preload("/models/orange.glb");

export default function ThreeScene() {
  return (
    <div className="w-[999px] h-[600px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AppleModel position={[-1.5, 0, 0]} />
          <OrangeModel position={[1.5, 0, 0]} />
          <Environment preset="park" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
