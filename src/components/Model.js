'use client';

import { forwardRef, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

const Model = forwardRef(({ animationId = 0 }, ref) => {
    const { scene, animations } = useGLTF("/twelve/models/scene-v1.glb");
    const internalRef = useRef();
    const modelRef = ref || internalRef;
    const { actions, names } = useAnimations(animations, modelRef);
    const [isMobile, setIsMobile] = useState(false);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const controlsRef = useRef();

    // Verificar se é um dispositivo móvel
    useEffect(() => {
        const checkIfMobile = () => {
            return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        };
        setIsMobile(checkIfMobile());
    }, []);

    // Solicitar permissão para o giroscópio
    const requestGyroPermission = async () => {
        if (typeof DeviceOrientationEvent !== 'undefined' && 
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const permission = await DeviceOrientationEvent.requestPermission();
                if (permission === 'granted') {
                    setPermissionGranted(true);
                    setupGyroControls();
                }
            } catch (error) {
                console.error('Permission to gyroscope was denied:', error);
            }
        } else {
            // Navegadores que não exigem solicitação de permissão
            setPermissionGranted(true);
            setupGyroControls();
        }
    };

    // Configurar controles de giroscópio
    const setupGyroControls = () => {
        if (!isMobile || !permissionGranted) return;

        let initialAlpha = null;
        let initialBeta = null;
        let initialGamma = null;

        const handleOrientation = (event) => {
            if (initialAlpha === null) {
                initialAlpha = event.alpha;
                initialBeta = event.beta;
                initialGamma = event.gamma;
            }

            // Ajustar a rotação do modelo com base no giroscópio
            if (modelRef.current) {
                const rotationX = (event.beta - initialBeta) * (Math.PI / 180) * 0.5;
                const rotationY = (event.alpha - initialAlpha) * (Math.PI / 180) * 0.5;
                const rotationZ = (event.gamma - initialGamma) * (Math.PI / 180) * 0.5;

                modelRef.current.rotation.set(
                    THREE.MathUtils.clamp(rotationX, -Math.PI / 4, Math.PI / 4),
                    rotationY,
                    THREE.MathUtils.clamp(rotationZ, -Math.PI / 4, Math.PI / 4)
                );
            }
        };

        window.addEventListener('deviceorientation', handleOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    };

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

    return (
        <>
            <primitive ref={modelRef} object={scene} />
            {!isMobile || permissionGranted ? (
                <OrbitControls
                    ref={controlsRef}
                    enablePan={true}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={0}
                    enabled={!isMobile || !permissionGranted}
                />
            ) : (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 100
                }} onClick={requestGyroPermission}>
                    Ativar Controle por Movimento
                </div>
            )}
        </>
    );
});

Model.displayName = 'Model';

export default Model;