import {Vector3} from "three";
import {Parts, Rotations} from "@/components/world-parts/Util";
import {useGLTF} from "@react-three/drei";
import {
    RULES_BUILDINGS,
    RULES_CORNERS,
    RULES_JUNCTION,
    RULES_ROADS,
    RULES_TSPLIT
} from "@/components/world-parts/Consts";
import {Rules} from "@/components/world-parts/Rules";

export class BaseModel {
    path!: string;
    name!: string;
    rotate?: Rotations;
    position:Vector3;
    part: Parts = Parts.BUILDINGS;

    constructor(path: string, name: string,position:Vector3 = new Vector3(0,0,0), rotate: Rotations = 0, part?:Parts) {
        this.path = path;
        this.rotate = rotate;
        this.position = position;
        this.name = name;
        if (part !== undefined) {
            this.part = part;
        }
    }

     getRules():Rules {
        switch (this.part) {
        case Parts.BUILDINGS: return RULES_BUILDINGS;
        case Parts.ROADS: return RULES_ROADS;
        case Parts.CORNERS: return RULES_CORNERS;
        case Parts.TSPLIT: return RULES_TSPLIT;
        case Parts.JUNCTION: return RULES_JUNCTION;
        default: return RULES_BUILDINGS;
        }
     }
}

export default function Model({ model }: { model: BaseModel }) {
    console.log(model);
    const {nodes, materials} = useGLTF(model.path);

    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes[model.name].geometry}
            material={materials.citybits_texture}
            position={model.position}
            rotation={[0, model.rotate ?? 0, 0]}
        />
    );
}

