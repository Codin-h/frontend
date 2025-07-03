import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingB extends BaseModel {
    static BUILDING_B_PATH = '/gltf/building_B.gltf';
    static NAME = 'building_B';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingB.BUILDING_B_PATH,
            BuildingB.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_B.gltf');