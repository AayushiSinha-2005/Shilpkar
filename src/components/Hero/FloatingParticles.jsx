import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Soft organic/floral particles drifting upward through the hero —
 * built with an instanced point cloud in Three.js.
 */
function Particles({ count = 220 }) {
  const points = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      spd[i] = 0.15 + Math.random() * 0.35;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    const arr = points.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta * 0.4;
      arr[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.0006;
      if (arr[i * 3 + 1] > 4.6) arr[i * 3 + 1] = -4.6;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#c6a15b"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function FloatingParticles() {
  return (
    <Canvas
      className="floating-particles"
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.6]}
    >
      <Particles />
    </Canvas>
  );
}
