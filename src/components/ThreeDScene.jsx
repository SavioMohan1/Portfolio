import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Kinetic Particle Constellation
    const particleCount = 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color("#C8A96E");
    const cyanColor = new THREE.Color("#6EE7B7");
    const mutedColor = new THREE.Color("#8892B0");

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 60;

      const rand = Math.random();
      const c = rand > 0.6 ? goldColor : rand > 0.3 ? cyanColor : mutedColor;
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // 2. Floating 3D Geometric Core (Wireframe Icosahedron)
    const coreGroup = new THREE.Group();

    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xc8a96e,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Inner glowing solid
    const innerGeo = new THREE.OctahedronGeometry(3.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Ring
    const ringGeo = new THREE.TorusGeometry(10, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc8a96e,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh);

    // Second inclined ring
    const ringGeo2 = new THREE.TorusGeometry(12, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8892b0,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    coreGroup.add(ringMesh2);

    coreGroup.position.set(16, 0, -5);
    scene.add(coreGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Particle rotation & flow
      particleSystem.rotation.y = elapsedTime * 0.03 + targetX * 0.15;
      particleSystem.rotation.x = targetY * 0.1;

      // Core Geometric transformations
      coreGroup.rotation.x = elapsedTime * 0.15 + targetY * 0.3;
      coreGroup.rotation.y = elapsedTime * 0.2 + targetX * 0.4;
      coreGroup.rotation.z = elapsedTime * 0.08;

      // Responsive positioning based on screen size & scroll
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        coreGroup.position.set(0, -2 - scrollY * 0.008, -12);
        coreGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        coreGroup.position.set(16 - targetX * 2, -scrollY * 0.012 + targetY, -5);
        coreGroup.scale.set(1, 1, 1);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      particleMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ opacity: 0.9 }}
    />
  );
};

export default ThreeDScene;
