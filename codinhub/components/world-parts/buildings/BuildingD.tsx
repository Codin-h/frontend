import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingD extends BaseModel {
    static BUILDING_D_PATH = '/gltf/building_D.gltf';
    static NAME = 'building_D';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingD.BUILDING_D_PATH,
            BuildingD.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_D.gltf');