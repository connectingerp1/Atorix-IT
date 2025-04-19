"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LogoSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    // Scene & Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(600, 600);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/atorix-logo.png", (texture) => {
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
        side: THREE.FrontSide, // You can try DoubleSide too, but FrontSide works fine here
      });
      

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Only rotate on Y-axis
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01; // left to right spin
        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
    />
  );
}
