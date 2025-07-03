import {useGLTF} from '@react-three/drei'
import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, Parts, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";

export default class RoadB extends BaseModel {
    static ROAD_PATH = '/gltf/road_straight_crossing.gltf';
    static NAME = 'road_straight_crossing';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            RoadB.ROAD_PATH,
            RoadB.NAME,
            position,
            rotate,
            Parts.ROADS
        );
    }

}

useGLTF.preload('/gltf/road_straight_crossing.gltf');