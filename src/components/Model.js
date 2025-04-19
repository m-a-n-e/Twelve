'use client';

import { forwardRef, useEffect, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";

const Model = forwardRef(({ animationId = 0 }, ref) => {
    const { scene, animations } = useGLTF("/twelve/models/scene-v1.glb");
    const internalRef = useRef();
    const modelRef = ref || internalRef;
    const { actions, names } = useAnimations(animations, modelRef);
    const controlsRef = useRef();

    useEffect(() => {
        if (actions && names.length > 0) {
            const animationName = names[animationId];
            if (animationName && actions[animationName]) {
                Object.values(actions).forEach(action => action.fadeOut(0.5));
                actions[animationName]
                    .reset()
                    .fadeIn(0.5) 
                    .play();
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
            <OrbitControls
                ref={controlsRef}
                enablePan={true}
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0}
            />
        </>
    );
});

Model.displayName = 'Model';

export default Model;
