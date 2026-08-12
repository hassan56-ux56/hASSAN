import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  isDarkMode: boolean;
}

export const ThreeCanvasBackground: React.FC<ThreeCanvasProps> = ({ isDarkMode }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isDarkMode ? 0x07120d : 0xf5f0e5, 0.0015);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x123523 : 0xfff9ed,
      isDarkMode ? 1.5 : 2.0
    );
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xffb51b, 2.5, 300);
    goldPointLight.position.set(40, 50, 60);
    scene.add(goldPointLight);

    const greenPointLight = new THREE.PointLight(
      isDarkMode ? 0x183728 : 0x294a37,
      2,
      300
    );
    greenPointLight.position.set(-50, -40, 40);
    scene.add(greenPointLight);

    // 5. Living Research Globe & Orbit Network
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Wireframe Globe Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(22, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0xffb51b : 0x294a37,
      wireframe: true,
      transparent: true,
      opacity: isDarkMode ? 0.08 : 0.06,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeMesh);

    // Orbital Rings
    const createRing = (radius: number, color: number, opacity: number, rotX: number, rotY: number) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.15, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      return ringMesh;
    };

    const ring1 = createRing(28, 0xffb51b, 0.25, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(34, 0x294a37, 0.2, -Math.PI / 4, Math.PI / 4);
    globeGroup.add(ring1);
    globeGroup.add(ring2);

    // 6. Floating Particles Ecosystem
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;
      scales[i] = Math.random() * 2 + 1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.PointsMaterial({
      color: isDarkMode ? 0xffb51b : 0x294a37,
      size: 1.2,
      transparent: true,
      opacity: isDarkMode ? 0.6 : 0.4,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Position globe group off-center towards right for hero layout
    globeGroup.position.set(25, -5, -10);

    // 7. Mouse & Scroll interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow globe rotation
      globeGroup.rotation.y = elapsedTime * 0.08;
      globeGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;
      ring1.rotation.z = elapsedTime * 0.05;
      ring2.rotation.z = -elapsedTime * 0.04;

      // Particles drift
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.03;
      }
      posAttr.needsUpdate = true;

      // Mouse parallax smooth dampening
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;
      globeGroup.position.x = 25 + targetX * 6;
      globeGroup.position.y = -5 - targetY * 6;

      // Moving light orbit
      goldPointLight.position.x = Math.sin(elapsedTime * 0.3) * 60;
      goldPointLight.position.z = Math.cos(elapsedTime * 0.3) * 60;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000"
    />
  );
};
