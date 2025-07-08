"use client"
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import React from "react";
import BuildingA from "@/components/world-parts/buildings/BuildingA";
import {BaseModel} from "@/components/world-parts/BaseModel";
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
import {Rotations} from "@/components/world-parts/Util";
import Model from "@/components/world-parts/BaseModel";

export default function World() {
    const B:BaseModel = new BuildingB(0, new Vector3(3, 0, 0));
    const C:BaseModel = new BuildingC(0, new Vector3(6, 0, 0));
    const D:BaseModel = new BuildingD(0, new Vector3(9, 0, 0));
    const E:BaseModel = new BuildingE(0, new Vector3(0, 3, 0));
    const F:BaseModel = new BuildingF(0, new Vector3(3, 3, 0));
    const G:BaseModel = new BuildingG(0, new Vector3(6, 3, 0));
    const H:BaseModel = new BuildingH(0, new Vector3(9, 3, 0));

    const roadB:BaseModel = new RoadB(0, new Vector3(3, 0, 3));
    const cornerB:BaseModel = new RoadCornerB(0, new Vector3(9, 0, 3));

    const A:BaseModel = new BuildingA(Rotations.Zero)
    const roadA:BaseModel = new RoadA(Rotations.Zero, new Vector3(3, 0, 0));
    const cornerA:BaseModel = new RoadCornerA(Rotations.Zero, new Vector3(6, 0, 0));
    const roadJunction:BaseModel = new RoadJunction(Rotations.Zero, new Vector3(9, 0, 0));
    const roadT:BaseModel = new RoadT(Rotations.Zero, new Vector3(12, 0, 0));

    const A1:BaseModel = new BuildingA(Rotations.HalfPi,  new Vector3(0, 0, 3))
    const roadA1:BaseModel = new RoadA(Rotations.HalfPi, new Vector3(3, 0, 3));
    const cornerA1:BaseModel = new RoadCornerA(Rotations.HalfPi, new Vector3(6, 0, 3));
    const roadJunction1:BaseModel = new RoadJunction(Rotations.HalfPi, new Vector3(9, 0, 3));
    const roadT1:BaseModel = new RoadT(Rotations.HalfPi, new Vector3(12, 0, 3));

    const A2:BaseModel = new BuildingA(Rotations.Pi,  new Vector3(0, 0, 6))
    const roadA2:BaseModel = new RoadA(Rotations.Pi, new Vector3(3, 0, 6));
    const cornerA2:BaseModel = new RoadCornerA(Rotations.Pi, new Vector3(6, 0, 6));
    const roadJunction2:BaseModel = new RoadJunction(Rotations.Pi, new Vector3(9, 0, 6));
    const roadT2:BaseModel = new RoadT(Rotations.Pi, new Vector3(12, 0, 6));


    const A3:BaseModel = new BuildingA(Rotations.MinusHalfPi,  new Vector3(0, 0, 9))
    const roadA3:BaseModel = new RoadA(Rotations.MinusHalfPi, new Vector3(3, 0, 9));
    const cornerA3:BaseModel = new RoadCornerA(Rotations.MinusHalfPi, new Vector3(6, 0, 9));
    const roadJunction3:BaseModel = new RoadJunction(Rotations.MinusHalfPi, new Vector3(9, 0, 9));
    const roadT3:BaseModel = new RoadT(Rotations.MinusHalfPi, new Vector3(12, 0, 9));

    return (
        <Canvas
            shadows
            className={"bg-blue-200 w-screen h-screen"}
            camera={{
                position: [-6, 7, 7],
            }}
        >
            {/*<Model model={B}/>*/}
            {/*<Model model={C}/>*/}
            {/*<Model model={D}/>*/}
            {/*<Model model={E}/>*/}
            {/*<Model model={F}/>*/}
            {/*<Model model={G}/>*/}
            {/*<Model model={H}/>*/}
            {/*<Model model={cornerB}/>*/}
            {/*<Model model={roadB}/>*/}

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
            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />

            <OrbitControls/>
        </Canvas>
    )
}



