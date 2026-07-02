'use client';
import { OrbitControls } from '@react-three/drei';

export default function CameraControls() {
  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      maxPolarAngle={Math.PI / 2}
      minDistance={1}
      maxDistance={10}
      makeDefault
    />
  );
}
