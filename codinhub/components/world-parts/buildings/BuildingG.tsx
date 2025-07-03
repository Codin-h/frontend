import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";
import {useGLTF} from "@react-three/drei";

export default class BuildingG extends BaseModel {
    static BUILDING_G_PATH = '/gltf/building_G.gltf';
    static NAME = 'building_G';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            BuildingG.BUILDING_G_PATH,
            BuildingG.NAME,
            position,
            rotate
        );
    }

}

useGLTF.preload('/gltf/building_G.gltf');