'use client';

import { forwardRef, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Model = forwardRef(({ animationId = 0 }, ref) => {
    const { scene, animations } = useGLTF("/twelve/models/scene-v1.glb");
    const internalRef = useRef();
    const modelRef = ref || internalRef; 
    const { actions, names } = useAnimations(animations, modelRef);

    const [mouseX, setMouseX] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
            setMouseX(x * 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(() => {
        if (modelRef.current) {
            const targetRotation = THREE.MathUtils.clamp(mouseX * Math.PI / 8, -Math.PI / 6, Math.PI / 6); // 🔹 Reduzi os limites
            modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotation, 0.05); // 🔹 Suavizei a interpolação
        }
    });

    useEffect(() => {
        if (actions && names.length > 0) {
            const animationName = names[animationId];
            if (animationName && actions[animationName]) {
                Object.values(actions).forEach(action => action.stop());
                actions[animationName].reset().fadeIn(0.5).play();
            }
        }
    }, [actions, names, animationId]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });

        scene.position.set(0, -1, 0);
        scene.scale.set(1, 1, 1);
    }, [scene]);

    return <primitive ref={modelRef} object={scene} />;
});

Model.displayName = 'Model';

export default Model;
