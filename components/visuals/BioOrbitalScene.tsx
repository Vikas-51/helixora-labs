"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DnaHelixPoints() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const numPointsPerStrand = 1600;
    const numLadderPoints = 1150;
    const totalPoints = numPointsPerStrand * 2 + numLadderPoints;

    const positionsArray = new Float32Array(totalPoints * 3);
    const colorsArray = new Float32Array(totalPoints * 3);

    const radius = 1.34;
    const height = 8.8;
    const turns = 3.15;

    const colorPurple = new THREE.Color("#5b2bd6");
    const colorPink = new THREE.Color("#ff4fc3");
    const colorLightPink = new THREE.Color("#ffa3dc");

    let idx = 0;

    const addPoint = (x: number, y: number, z: number, progress: number, isDust = false) => {
      const dispersion = isDust ? 0.72 : 0.12;
      const rx = x + (Math.random() - 0.5) * dispersion;
      const ry = y + (Math.random() - 0.5) * dispersion;
      const rz = z + (Math.random() - 0.5) * dispersion;

      positionsArray[idx * 3] = rx;
      positionsArray[idx * 3 + 1] = ry;
      positionsArray[idx * 3 + 2] = rz;

      const baseColor = new THREE.Color().lerpColors(colorPurple, colorPink, progress);
      if (Math.random() > 0.62) {
        baseColor.lerp(colorLightPink, 0.58);
      }

      colorsArray[idx * 3] = baseColor.r;
      colorsArray[idx * 3 + 1] = baseColor.g;
      colorsArray[idx * 3 + 2] = baseColor.b;

      idx++;
    };

    for (let i = 0; i < numPointsPerStrand; i++) {
      const t = i / numPointsPerStrand;
      const y = (t - 0.5) * height;
      const angle = t * turns * Math.PI * 2;
      const drift = Math.sin(t * Math.PI * 7) * 0.22;

      const x1 = Math.cos(angle) * radius + drift;
      const z1 = Math.sin(angle) * radius;
      addPoint(x1, y, z1, t, Math.random() > 0.85);

      const x2 = Math.cos(angle + Math.PI) * radius + drift;
      const z2 = Math.sin(angle + Math.PI) * radius;
      addPoint(x2, y, z2, t, Math.random() > 0.82);
    }

    const numSteps = 34;
    const pointsPerStep = Math.floor(numLadderPoints / numSteps);

    for (let step = 0; step < numSteps; step++) {
      const t = step / numSteps;
      const y = (t - 0.5) * height;
      const angle = t * turns * Math.PI * 2;
      const drift = Math.sin(t * Math.PI * 7) * 0.22;

      const x1 = Math.cos(angle) * radius + drift;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius + drift;
      const z2 = Math.sin(angle + Math.PI) * radius;

      for (let p = 0; p < pointsPerStep; p++) {
        const lerpFactor = p / (pointsPerStep - 1);
        const lx = THREE.MathUtils.lerp(x1, x2, lerpFactor);
        const lz = THREE.MathUtils.lerp(z1, z2, lerpFactor);

        addPoint(lx, y, lz, t, Math.random() > 0.78);
      }
    }

    return {
      positions: positionsArray,
      colors: colorsArray,
    };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.24;
    // pointsRef.current.rotation.z = -0.28;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function BioOrbitalScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative -mr-8 aspect-[1/1.04] min-h-[430px] overflow-visible bg-transparent sm:min-h-[540px] lg:-mr-20 ${className}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_58%_48%,rgba(255,79,195,0.18),transparent_34%),radial-gradient(circle_at_72%_24%,rgba(91,43,214,0.14),transparent_30%)]" />
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0.2, 0, 6.1], fov: 72 }}
        dpr={[1, 2]}
        className="!absolute inset-0"
      >
        <ambientLight intensity={1} />
        <group position={[0.62, 0.04, 0]} rotation={[0, 0, -0.24]} scale={1.12}>
          <DnaHelixPoints />
        </group>
      </Canvas>
    </div>
  );
}
