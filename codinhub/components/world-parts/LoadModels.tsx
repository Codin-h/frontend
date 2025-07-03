import {useGLTF} from "@react-three/drei";
import BaseModel from "@/components/world-parts/BaseModel";

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

