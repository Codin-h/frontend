import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingC extends BaseModel {
    static BUILDING_C_PATH = '/gltf/building_C.gltf';
    static NAME = 'building_C';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingC.BUILDING_C_PATH,
            BuildingC.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_C.gltf');