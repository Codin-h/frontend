import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingF extends BaseModel {
    static BUILDING_F_PATH = '/gltf/building_F.gltf';
    static NAME = 'building_F';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingF.BUILDING_F_PATH,
            BuildingF.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_F.gltf');