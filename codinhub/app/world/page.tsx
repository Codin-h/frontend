"use client"
import {Canvas} from "@react-three/fiber";
import React from 'react'
import {OrbitControls, useGLTF} from '@react-three/drei'
import {TextureLoader} from 'three'
import { useLoader } from "@react-three/fiber";

export default function Model() {
    const { nodes, materials } = useGLTF('/gltf/building_A.gltf')
    const texture = useLoader(TextureLoader, "/gltf/citybits_texture.png");
    console.log(nodes, materials)
    return (
            <Canvas
                shadows
                className={"bg-blue-200 w-screen h-screen"}
                camera={{
                    position: [-6, 7, 7],
                }}
            >
                <mesh
                    castShadow
                    receiveShadow

                    geometry={nodes.building_A.geometry}
                    material={materials.citybits_texture}

                >
                </mesh>
                <directionalLight
                    position={[3.3, 1.0, 4.4]}
                    castShadow
                    intensity={Math.PI * 2}
                />
                <OrbitControls/>
            </Canvas>
    )
}



useGLTF.preload('/gltf/building_A.gltf')