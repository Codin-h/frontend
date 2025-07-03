import {useGLTF} from '@react-three/drei'
import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";

export default class BuildingA extends BaseModel {
    static BUILDING_A_PATH = '/gltf/building_A.gltf';
    static NAME = 'building_A';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingA.BUILDING_A_PATH,
            BuildingA.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_A.gltf');