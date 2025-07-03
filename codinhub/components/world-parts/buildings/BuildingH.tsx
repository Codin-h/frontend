import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingH extends BaseModel {
    static BUILDING_H_PATH = '/gltf/building_H.gltf';
    static NAME = 'building_H';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingH.BUILDING_H_PATH,
            BuildingH.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_H.gltf');