import {useGLTF} from '@react-three/drei'
import BaseModel from "@/components/world-parts/BaseModel";
import {AllowedRotation, Parts, RULES_BUILDINGS} from "@/components/world-parts/Util";
import {Vector3} from "three";

export default class RoadJunction extends BaseModel {
    static ROAD_JUNCTION_PATH = '/gltf/road_junction.gltf';
    static NAME = 'road_junction';

    constructor(rotate: AllowedRotation = 0, position: Vector3 = new Vector3(0, 0, 0)) {
        super(RULES_BUILDINGS,
            RoadJunction.ROAD_JUNCTION_PATH,
            RoadJunction.NAME,
            position,
            rotate,
            Parts.JUNCTION
        );
    }

}

useGLTF.preload('/gltf/road_junction.gltf');