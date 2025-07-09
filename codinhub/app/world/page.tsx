"use client"
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import React from "react";
// import BuildingA from "@/components/world-parts/buildings/BuildingA";
// import {BaseModel} from "@/components/world-parts/BaseModel";
// import BuildingB from "@/components/world-parts/buildings/BuildingB";
import {Vector3} from "three";
// import BuildingC from "@/components/world-parts/buildings/BuildingC";
// import BuildingD from "@/components/world-parts/buildings/BuildingD";
// import BuildingE from "@/components/world-parts/buildings/BuildingE";
// import BuildingF from "@/components/world-parts/buildings/BuildingF";
// import BuildingG from "@/components/world-parts/buildings/BuildingG";
// import BuildingH from "@/components/world-parts/buildings/BuildingH";
// import RoadA from "@/components/world-parts/roads/RoadA";
// import RoadB from "@/components/world-parts/roads/RoadB";
// import RoadCornerA from "@/components/world-parts/roads/RoadCornerA";
// import RoadCornerB from "@/components/world-parts/roads/RoadCornerB";
// import RoadJunction from "@/components/world-parts/roads/RoadJunction";
// import RoadT from "@/components/world-parts/roads/RoadT";
// import { Rotations} from "@/components/world-parts/Util";
import Model, {BaseModel} from "@/components/world-parts/BaseModel";
import {WorldGen} from "@/components/wave/WorldGen";
import {modelFromType_Rotation} from "@/components/wave/Utils";

const stuff = WorldGen()
export default function World() {
    let aaa = stuff[0]

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

            {aaa.map((model, index) => {
                if (model instanceof BaseModel) {
                    return <Model model={model} key={index}/>;
                } else {
                    // console.warn(`Model at index ${index} is not an instance of BaseModel`, model);
                    return null;
                }
            })}



            <OrbitControls/>
        </Canvas>
    )
}


{/*<Model model={A}/>*/}
{/*<Model model={roadA}/>*/}
{/*<Model model={cornerA}/>*/}
{/*<Model model={roadJunction}/>*/}
{/*<Model model={roadT}/>*/}

{/*<Model model={A1}/>*/}
{/*<Model model={roadA1}/>*/}
{/*<Model model={cornerA1}/>*/}
{/*<Model model={roadJunction1}/>*/}
{/*<Model model={roadT1}/>*/}

{/*<Model model={A2}/>*/}
{/*<Model model={roadA2}/>*/}
{/*<Model model={cornerA2}/>*/}
{/*<Model model={roadJunction2}/>*/}
{/*<Model model={roadT2}/>*/}

{/*<Model model={A3}/>*/}
{/*<Model model={roadA3}/>*/}
{/*<Model model={cornerA3}/>*/}
{/*<Model model={roadJunction3}/>*/}
{/*<Model model={roadT3}/> */}

// const A:BaseModel = new BuildingA(Rotations.Zero)
// const roadA:BaseModel = new RoadA(Rotations.Zero, new Vector3(2, 0, 0));
// const cornerA:BaseModel = new RoadCornerA(Rotations.Zero, new Vector3(6, 0, 0));
// const roadJunction:BaseModel = new RoadJunction(Rotations.Zero, new Vector3(9, 0, 0));
// const roadT:BaseModel = new RoadT(Rotations.Zero, new Vector3(12, 0, 0));
//
// const A1:BaseModel = new BuildingA(Rotations.HalfPi,  new Vector3(0, 0, 3))
// const roadA1:BaseModel = new RoadA(Rotations.HalfPi, new Vector3(3, 0, 3));
// const cornerA1:BaseModel = new RoadCornerA(Rotations.HalfPi, new Vector3(6, 0, 3));
// const roadJunction1:BaseModel = new RoadJunction(Rotations.HalfPi, new Vector3(9, 0, 3));
// const roadT1:BaseModel = new RoadT(Rotations.HalfPi, new Vector3(12, 0, 3));
//
// const A2:BaseModel = new BuildingA(Rotations.Pi,  new Vector3(0, 0, 6))
// const roadA2:BaseModel = new RoadA(Rotations.Pi, new Vector3(3, 0, 6));
// const cornerA2:BaseModel = new RoadCornerA(Rotations.Pi, new Vector3(6, 0, 6));
// const roadJunction2:BaseModel = new RoadJunction(Rotations.Pi, new Vector3(9, 0, 6));
// const roadT2:BaseModel = new RoadT(Rotations.Pi, new Vector3(12, 0, 6));
//
//
// const A3:BaseModel = new BuildingA(Rotations.MinusHalfPi,  new Vector3(0, 0, 9))
// const roadA3:BaseModel = new RoadA(Rotations.MinusHalfPi, new Vector3(3, 0, 9));
// const cornerA3:BaseModel = new RoadCornerA(Rotations.MinusHalfPi, new Vector3(6, 0, 9));
// const roadJunction3:BaseModel = new RoadJunction(Rotations.MinusHalfPi, new Vector3(9, 0, 9));
// const roadT3:BaseModel = new RoadT(Rotations.MinusHalfPi, new Vector3(12, 0, 9));
