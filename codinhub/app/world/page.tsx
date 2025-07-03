"use client"
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import React from "react";
import BuildingA from "@/components/world-parts/buildings/BuildingA";
import Model from "@/components/world-parts/LoadModels";
import BaseModel from "@/components/world-parts/BaseModel";
import BuildingB from "@/components/world-parts/buildings/BuildingB";
import {Vector3} from "three";
import BuildingC from "@/components/world-parts/buildings/BuildingC";
import BuildingD from "@/components/world-parts/buildings/BuildingD";
import BuildingE from "@/components/world-parts/buildings/BuildingE";
import BuildingF from "@/components/world-parts/buildings/BuildingF";
import BuildingG from "@/components/world-parts/buildings/BuildingG";
import BuildingH from "@/components/world-parts/buildings/BuildingH";
import RoadA from "@/components/world-parts/roads/RoadA";
import RoadB from "@/components/world-parts/roads/RoadB";
import RoadCornerA from "@/components/world-parts/roads/RoadCornerA";
import RoadCornerB from "@/components/world-parts/roads/RoadCornerB";
import RoadJunction from "@/components/world-parts/roads/RoadJunction";
import RoadT from "@/components/world-parts/roads/RoadT";
import {AllowedRotation} from "@/components/world-parts/Util";

export default function World() {
    const A:BaseModel = new BuildingA(0)
    const B:BaseModel = new BuildingB(0, new Vector3(3, 0, 0));
    const C:BaseModel = new BuildingC(0, new Vector3(6, 0, 0));
    const D:BaseModel = new BuildingD(0, new Vector3(9, 0, 0));
    const E:BaseModel = new BuildingE(0, new Vector3(0, 3, 0));
    const F:BaseModel = new BuildingF(0, new Vector3(3, 3, 0));
    const G:BaseModel = new BuildingG(0, new Vector3(6, 3, 0));
    const H:BaseModel = new BuildingH(0, new Vector3(9, 3, 0));

    const roadA:BaseModel = new RoadA(AllowedRotation.HalfPi, new Vector3(0, 0, 3));
    const roadB:BaseModel = new RoadB(0, new Vector3(3, 0, 3));
    const cornerA:BaseModel = new RoadCornerA(AllowedRotation.HalfPi, new Vector3(6, 0, 3));
    const cornerB:BaseModel = new RoadCornerB(0, new Vector3(9, 0, 3));
    const roadJunction:BaseModel = new RoadJunction(0, new Vector3(0, 3, 3));
    const roadT:BaseModel = new RoadT(0, new Vector3(3, 3, 3));

    return (
        <Canvas
            shadows
            className={"bg-blue-200 w-screen h-screen"}
            camera={{
                position: [-6, 7, 7],
            }}
        >
            <Model model={A}/>
            <Model model={B}/>
            <Model model={C}/>
            <Model model={D}/>
            <Model model={E}/>
            <Model model={F}/>
            <Model model={G}/>
            <Model model={H}/>

            <Model model={roadA}/>
            <Model model={roadB}/>
            <Model model={cornerA}/>
            <Model model={cornerB}/>
            <Model model={roadJunction}/>
            <Model model={roadT}/>
            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />

            <OrbitControls/>
        </Canvas>
    )
}



