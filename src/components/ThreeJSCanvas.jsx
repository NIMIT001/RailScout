import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeJSCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a plane and add it to the scene
    const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      wireframe: true,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Create a grid helper
    const gridHelper = new THREE.GridHelper(100, 100);
    scene.add(gridHelper);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle double-click event
    canvas.addEventListener("dblclick", (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        (-(event.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections
      const intersects = raycaster.intersectObjects([plane]);
      if (intersects.length > 0) {
        const intersect = intersects[0];
        console.log("Double-clicked coordinates:", intersect.point);
      }
    });

    return () => {
      canvas.removeEventListener("dblclick", () => {});
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeJSCanvas;
