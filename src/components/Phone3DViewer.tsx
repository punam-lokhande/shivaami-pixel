import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

interface PhonePlaneProps {
  imageUrl: string;
  autoRotate: boolean;
}

const PhonePlane = ({ imageUrl, autoRotate }: PhonePlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  const [hovered, setHovered] = useState(false);

  // Calculate aspect ratio from texture
  const aspect = texture.image
    ? texture.image.width / texture.image.height
    : 0.5;
  const height = 4.2;
  const width = height * aspect;

  useFrame((_, delta) => {
    if (meshRef.current && autoRotate && !hovered) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Front face */}
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

interface Phone3DViewerProps {
  imageUrl: string;
  className?: string;
}

const Phone3DViewer = ({ imageUrl, className = "" }: Phone3DViewerProps) => {
  return (
    <div className={`w-full h-full cursor-grab active:cursor-grabbing ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />
        <pointLight position={[0, -3, 3]} intensity={0.3} color="#4285f4" />

        <Suspense fallback={null}>
          <PhonePlane imageUrl={imageUrl} autoRotate />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Phone3DViewer;
