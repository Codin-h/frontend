import {useGLTF} from '@react-three/drei'
import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, Parts, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";

export default class RoadCornerA extends BaseModel {
    static ROAD_CORNER_A_PATH = '/gltf/road_corner.gltf';
    static NAME = 'road_corner';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            RoadCornerA.ROAD_CORNER_A_PATH,
            RoadCornerA.NAME,
            position,
            rotate,
            Parts.CORNERS
        );
    }

}

useGLTF.preload('/gltf/road_corner.gltf');