"use client"
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import React from "react";
import Model, { BaseModel } from "@/components/world-parts/BaseModel";
import {ModelTypes, Rotations} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {modelFromData} from "@/components/world-parts/a";
import BuildingA from "@/components/world-parts/buildings/BuildingA";
import RoadA from "@/components/world-parts/roads/RoadA";
import RoadCornerA from "@/components/world-parts/roads/RoadCornerA";
import RoadJunction from "@/components/world-parts/roads/RoadJunction";
import RoadT from "@/components/world-parts/roads/RoadT";
import RoadB from "@/components/world-parts/roads/RoadB";
let world =
    ([modelFromData( ModelTypes.CORNER_A, Rotations.NEGATIVE_HALF_PI, new Vector3(8, 0, 6)), modelFromData( ModelTypes.ROAD_A, Rotations.NEGATIVE_HALF_PI, new Vector3(6, 0, 6)), modelFromData( ModelTypes.CORNER_A, Rotations.PI, new Vector3(8, 0, 8)), modelFromData( ModelTypes.CORNER_A, Rotations.ZERO, new Vector3(6, 0, 8)), modelFromData( ModelTypes.CORNER_A, Rotations.ZERO, new Vector3(4, 0, 6)), modelFromData( ModelTypes.ROAD_A, Rotations.PI, new Vector3(4, 0, 8)), modelFromData( ModelTypes.ROAD_A, Rotations.HALF_PI, new Vector3(8, 0, 4)), modelFromData( ModelTypes.CORNER_A, Rotations.HALF_PI, new Vector3(6, 0, 4)), modelFromData( ModelTypes.CORNER_A, Rotations.NEGATIVE_HALF_PI, new Vector3(6, 0, 2)), modelFromData( ModelTypes.ROAD_A, Rotations.HALF_PI, new Vector3(4, 0, 2)), modelFromData( ModelTypes.JUNCTION, Rotations.ZERO, new Vector3(2, 0, 2)), modelFromData( ModelTypes.JUNCTION, Rotations.HALF_PI, new Vector3(0, 0, 2)), modelFromData( ModelTypes.CORNER_A, Rotations.PI, new Vector3(2, 0, 4)), modelFromData( ModelTypes.JUNCTION, Rotations.PI, new Vector3(0, 0, 4)), modelFromData( ModelTypes.INTERSECTION, Rotations.PI, new Vector3(2, 0, 0))])

export default function World() {
    const A:BaseModel = new BuildingA(Rotations.ZERO, new Vector3(0 + 14, 0, 0))
    const roadA:BaseModel = new RoadB(Rotations.ZERO, new Vector3(2 + 14, 0, 0));
    const cornerA:BaseModel = new RoadCornerA(Rotations.ZERO, new Vector3(4 + 14, 0, 0));
    const roadJunction:BaseModel = new RoadJunction(Rotations.ZERO, new Vector3(6 + 14, 0, 0));
    const roadT:BaseModel = new RoadT(Rotations.ZERO, new Vector3(8 + 14, 0, 0));

    const A1:BaseModel = new BuildingA(Rotations.HALF_PI,  new Vector3(0 + 14, 0, 2))
    const roadA1:BaseModel = new RoadB(Rotations.HALF_PI, new Vector3(2 + 14, 0, 2));
    const cornerA1:BaseModel = new RoadCornerA(Rotations.HALF_PI, new Vector3(4 + 14, 0, 2));
    const roadJunction1:BaseModel = new RoadJunction(Rotations.HALF_PI, new Vector3(6 + 14, 0, 2));
    const roadT1:BaseModel = new RoadT(Rotations.HALF_PI, new Vector3(8 + 14, 0, 2));

    const A2:BaseModel = new BuildingA(Rotations.PI,  new Vector3(0 + 14, 0, 4))
    const roadA2:BaseModel = new RoadB(Rotations.PI, new Vector3(2 + 14, 0, 4));
    const cornerA2:BaseModel = new RoadCornerA(Rotations.PI, new Vector3(4 + 14, 0, 4));
    const roadJunction2:BaseModel = new RoadJunction(Rotations.PI, new Vector3(6 + 14, 0, 4));
    const roadT2:BaseModel = new RoadT(Rotations.PI, new Vector3(8 + 14, 0, 4));


    const A3:BaseModel = new BuildingA(Rotations.NEGATIVE_HALF_PI,  new Vector3(0 + 14, 0, 6))
    const roadA3:BaseModel = new RoadB(Rotations.NEGATIVE_HALF_PI, new Vector3(2 + 14, 0, 6));
    const cornerA3:BaseModel = new RoadCornerA(Rotations.NEGATIVE_HALF_PI, new Vector3(4 + 14, 0, 6));
    const roadJunction3:BaseModel = new RoadJunction(Rotations.NEGATIVE_HALF_PI, new Vector3(6 + 14, 0, 6));
    const roadT3:BaseModel = new RoadT(Rotations.NEGATIVE_HALF_PI, new Vector3(8 + 14, 0, 6));


    return (
        <Canvas
            shadows
            className={"bg-blue-200 w-screen h-screen"}
            camera={{
                position: [-6, 7, 7],
            }}
        >
            {/*<Model model={part}/>*/}
            <gridHelper
                position={[49, 0, 49]}
                args={[100, 50]} // 100 units size, 50 divisions (step of 2)
            />

            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />

            {world.map((model, index) => {

                return <Model model={model} key={index}/>;

            })}

            <Model model={A}/>
            <Model model={roadA}/>
            <Model model={cornerA}/>
            <Model model={roadJunction}/>
            <Model model={roadT}/>

            <Model model={A1}/>
            <Model model={roadA1}/>
            <Model model={cornerA1}/>
            <Model model={roadJunction1}/>
            <Model model={roadT1}/>

            <Model model={A2}/>
            <Model model={roadA2}/>
            <Model model={cornerA2}/>
            <Model model={roadJunction2}/>
            <Model model={roadT2}/>

            <Model model={A3}/>
            <Model model={roadA3}/>
            <Model model={cornerA3}/>
            <Model model={roadJunction3}/>
            <Model model={roadT3}/>



            <OrbitControls/>
        </Canvas>
    )
}


