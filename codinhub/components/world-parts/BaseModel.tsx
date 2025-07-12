import {Vector3} from "three";
import {Parts, Rotations} from "@/components/world-parts/Util";
import {useGLTF} from "@react-three/drei";


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
