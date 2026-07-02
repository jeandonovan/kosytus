'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import { useQualityStore } from '../../store/useStore';
import CameraControls from './CameraControls';

function ModelIfExists({ src }: { src: string }) {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    // quick fetch to check presence (lightweight)
    fetch(src, { method: 'HEAD' })
      .then((r) => {
        if (!mounted) return;
        setExists(r.ok);
      })
      .catch(() => mounted && setExists(false));
    return () => {
      mounted = false;
    };
  }, [src]);

  if (exists === null) return <Html center>Chargement…</Html>;
  if (!exists) {
    // fallback: simple low-poly box
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    );
  }

  return <LoadedGLTF src={src} />;
}

function LoadedGLTF({ src }: { src: string }) {
  // useGLTF caches and is fast — suspense handles async
  const { scene } = useGLTF(src, true) as any;
  return <primitive object={scene} />;
}

export default function Viewer() {
  const quality = useQualityStore((s) => s.quality);
  const dpr = quality === 'high' ? [1, 1.5] : [0.6, 1];
  const antialias = quality === 'high';

  return (
    <div className="h-full">
      <Canvas
        frameloop="demand"
        dpr={dpr}
        gl={{ antialias, powerPreference: 'low-power' }}
        camera={{ position: [2, 2, 2], fov: 45 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Suspense fallback={<Html center>Chargement 3D…</Html>}>
          <ModelIfExists src="/models/test.glb" />
        </Suspense>
        <CameraControls />
      </Canvas>
    </div>
  );
}
