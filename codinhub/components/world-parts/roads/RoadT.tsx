import {useGLTF} from '@react-three/drei'
import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, Parts, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";

export default class RoadT extends BaseModel {
    static ROAD_T_PATH = '/gltf/road_tsplit.gltf';
    static NAME = 'road_tsplit';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            RoadT.ROAD_T_PATH,
            RoadT.NAME,
            position,
            rotate,
            Parts.TSPLIT

        );
    }

}

useGLTF.preload('/gltf/road_tsplit.gltf');