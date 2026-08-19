"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type CapabilityVisualMode = "helix" | "sphere" | "ring" | "lattice" | "wave" | "capsule";

type CapabilityParticleVisualProps = {
  mode: CapabilityVisualMode;
};

const modeConfig: Record<CapabilityVisualMode, { color: string; density: number; tilt: number; spin: number }> = {
  helix: { color: "#f6b800", density: 1.05, tilt: -0.32, spin: 15 },
  sphere: { color: "#a855f7", density: 1.25, tilt: 0.12, spin: 18 },
  ring: { color: "#ff4fc3", density: 0.95, tilt: 0.42, spin: 20 },
  lattice: { color: "#d2a8ff", density: 1, tilt: -0.5, spin: 22 },
  wave: { color: "#f6b800", density: 1.1, tilt: 0.16, spin: 16 },
  capsule: { color: "#a855f7", density: 0.9, tilt: -0.62, spin: 19 }
};

function makePoint(mode: CapabilityVisualMode, index: number, total: number, radius: number) {
  if (mode === "helix") {
    const p = index / total;
    const angle = p * Math.PI * 9.6;
    return new THREE.Vector3(Math.cos(angle) * 0.72, (p - 0.5) * 2.6, Math.sin(angle) * 0.72);
  }

  if (mode === "ring") {
    const p = index / total;
    const angle = p * Math.PI * 2;
    const band = (index % 5) * 0.06;
    return new THREE.Vector3(Math.cos(angle) * (1.15 + band), Math.sin(angle * 3) * 0.18, Math.sin(angle) * (0.38 + band));
  }

  if (mode === "lattice") {
    const side = 9;
    const x = (index % side) / (side - 1) - 0.5;
    const y = (Math.floor(index / side) % side) / (side - 1) - 0.5;
    const z = (Math.floor(index / (side * side)) % side) / (side - 1) - 0.5;
    return new THREE.Vector3(x * 2.1, y * 1.55, z * 2.1);
  }

  if (mode === "wave") {
    const p = index / total;
    const x = (p - 0.5) * 2.6;
    const strand = (index % 9) / 8 - 0.5;
    return new THREE.Vector3(x, Math.sin(p * Math.PI * 4 + strand * 2) * 0.42 + strand * 0.7, Math.cos(p * Math.PI * 3) * 0.32);
  }

  if (mode === "capsule") {
    const p = index / total;
    const layer = index % 4;
    const angle = p * Math.PI * 2 * (layer + 1);
    const radiusByLayer = [0.34, 0.66, 0.94, 1.18][layer];
    return new THREE.Vector3(
      Math.cos(angle) * radiusByLayer,
      Math.sin(angle * 1.7) * radiusByLayer * 0.54,
      Math.sin(angle) * radiusByLayer * 0.72
    );
  }

  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const shellBias = Math.pow(Math.random(), 0.42);
  const r = radius * (0.72 + shellBias * 0.28);
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  );
}

function ParticleNetwork({ mode }: { mode: CapabilityVisualMode }) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const lineSegments = useRef<THREE.LineSegments>(null);
  const config = modeConfig[mode];

  const { particlePositions, linePositions } = useMemo(() => {
    const pointCount = mode === "lattice" ? 729 : Math.floor(760 * config.density);
    const radius = 1.35;
    const positions = new Float32Array(pointCount * 3);
    const lineData: number[] = [];
    const sampled: THREE.Vector3[] = [];

    for (let i = 0; i < pointCount; i++) {
      const point = makePoint(mode, i, pointCount, radius);
      const jitter = mode === "lattice" ? 0.025 : 0.05;
      const x = point.x + (Math.random() - 0.5) * jitter;
      const y = point.y + (Math.random() - 0.5) * jitter;
      const z = point.z + (Math.random() - 0.5) * jitter;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      if (i % (mode === "lattice" ? 31 : 24) === 0) {
        sampled.push(new THREE.Vector3(x, y, z));
      }
    }

    sampled.forEach((point, index) => {
      const next = sampled[(index + (mode === "helix" ? 1 : mode === "capsule" ? 4 : 7)) % sampled.length];
      const skip = sampled[(index + (mode === "lattice" ? 3 : mode === "capsule" ? 9 : 13)) % sampled.length];
      [next, skip].forEach((target) => {
        if (point.distanceTo(target) < (mode === "helix" ? 0.62 : mode === "capsule" ? 0.9 : 1.15)) {
          lineData.push(point.x, point.y, point.z, target.x, target.y, target.z);
        }
      });
    });

    return {
      particlePositions: positions,
      linePositions: new Float32Array(lineData)
    };
  }, [config.density, mode]);

  useEffect(() => {
    if (!group.current) return;

    const spin = gsap.to(group.current.rotation, {
      y: Math.PI * 2,
      duration: config.spin,
      ease: "none",
      repeat: -1
    });

    const pulse = points.current
      ? gsap.to(points.current.scale, {
          x: 1.07,
          y: 1.07,
          z: 1.07,
          duration: 2.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        })
      : undefined;

    return () => {
      spin.kill();
      pulse?.kill();
    };
  }, [config.spin]);

  useFrame(({ clock }) => {
    if (!group.current || !lineSegments.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.x = config.tilt + Math.sin(t * 0.45) * 0.08;
    lineSegments.current.rotation.z = Math.sin(t * 0.3) * 0.12;
  });

  return (
    <group ref={group} scale={1.62}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={config.color}
          size={0.018}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      {/* <lineSegments ref={lineSegments}> */}
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={config.color} transparent opacity={0.12} blending={THREE.AdditiveBlending} />
      {/* </lineSegments> */}
    </group>
  );
}

export function CapabilityParticleVisual({ mode }: CapabilityParticleVisualProps) {
  return (
    <div className="mb-8 h-56 overflow-hidden border border-bone/10 bg-[#141414] opacity-95 transition duration-300 group-hover:border-plasma/35 group-hover:opacity-100 sm:h-60">
      <Canvas camera={{ position: [0, 0, 3.7], fov: 80 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={["#141414"]} />
        <ambientLight intensity={1.2} />
        <ParticleNetwork mode={mode} />
      </Canvas>
    </div>
  );
}
