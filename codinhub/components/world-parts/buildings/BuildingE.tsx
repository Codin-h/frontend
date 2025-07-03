import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingE extends BaseModel {
    static BUILDING_E_PATH = '/gltf/building_E.gltf';
    static NAME = 'building_E';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingE.BUILDING_E_PATH,
            BuildingE.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_E.gltf');