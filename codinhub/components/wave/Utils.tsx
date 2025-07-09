import {BaseModel} from "@/components/world-parts/BaseModel";
import getRulesBasedOnOrientation from "@/components/world-parts/Rules";
import {Vector3} from "three";
import {ModelTypes, Parts, Rotations} from "@/components/world-parts/Util";
import {partToModelTypes, weights} from "@/components/world-parts/Consts";
import BuildingA from "@/components/world-parts/buildings/BuildingA";
import BuildingE from "@/components/world-parts/buildings/BuildingE";
import BuildingB from "@/components/world-parts/buildings/BuildingB";
import BuildingC from "@/components/world-parts/buildings/BuildingC";
import BuildingD from "@/components/world-parts/buildings/BuildingD";
import BuildingF from "@/components/world-parts/buildings/BuildingF";
import BuildingG from "@/components/world-parts/buildings/BuildingG";
import BuildingH from "@/components/world-parts/buildings/BuildingH";
import RoadA from "@/components/world-parts/roads/RoadA";
import RoadB from "@/components/world-parts/roads/RoadB";
import RoadCornerA from "@/components/world-parts/roads/RoadCornerA";
import RoadCornerB from "@/components/world-parts/roads/RoadCornerB";
import RoadJunction from "@/components/world-parts/roads/RoadJunction";
import RoadT from "@/components/world-parts/roads/RoadT";


export function updatePossibleParts(
    model: BaseModel,
    coords: Vector3,
    possibleParts: Partial<Record<Parts, Rotations[]>>
): Partial<Record<Parts, Rotations[]>> {
    const rules = getRulesBasedOnOrientation(model, coords);
    if (!rules) {
        return possibleParts;
    }

    for (const part of Object.keys(possibleParts) as unknown as Parts[]) {
        const disallowedRotations = rules[part];
        if (!disallowedRotations) {
            throw new Error(`No rules found for part: ${part}`);
        }

        const currentRotations = possibleParts[part];
        if (!currentRotations) {
            // If there are no rotations left for this part, delete it
            delete possibleParts[part];
            continue;
        }

        // Filter out disallowed rotations
        const filtered = currentRotations.filter(r => !disallowedRotations.includes(r));

        // If no rotations are left, delete the part
        if (filtered.length === 0) {
            delete possibleParts[part];
        } else {
            possibleParts[part] = filtered;
        }
    }

    return possibleParts;
}


export function computeEntropy(possibleParts: Partial<Record<Parts, Rotations[]>>): number {
    let totalWeight = 0;
    let sumWeightLogWeight = 0;

    // Iterate over each part in possibleParts
    for (const partKey in possibleParts) {
        // Convert string key to enum value (number)
        const part = Number(partKey) as Parts;
        const rotations = possibleParts[part];
        if (!rotations) continue;

        const modelTypes = partToModelTypes[part];
        for (const modelType of modelTypes) {
            const weight = weights[modelType];
            for (const {} of rotations) {
                totalWeight += weight;
                if (weight > 0) {
                    sumWeightLogWeight += weight * Math.log(weight);
                }
            }
        }
    }

    // Handle no valid states
    if (totalWeight === 0) {
        return Infinity;
    }

    // Calculate entropy using Shannon formula
    // Add small noise to break ties randomly
    return Math.log(totalWeight) - (sumWeightLogWeight / totalWeight); // + Math.random() * 1e-6;
}

export function modelFromType_Rotation(type: ModelTypes, rotation: Rotations, coords:Vector3): BaseModel {
    switch (type) {
        case ModelTypes.BuildingA: return new BuildingA(rotation, coords);
        case ModelTypes.BuildingB: return new BuildingB(rotation, coords);
        case ModelTypes.BuildingC: return new BuildingC(rotation, coords);
        case ModelTypes.BuildingD: return new BuildingD(rotation, coords);
        case ModelTypes.BuildingE: return new BuildingE(rotation, coords);
        case ModelTypes.BuildingF: return new BuildingF(rotation, coords);
        case ModelTypes.BuildingG: return new BuildingG(rotation, coords);
        case ModelTypes.BuildingH: return new BuildingH(rotation, coords);
        case ModelTypes.RoadA: return new RoadA(rotation, coords);
        case ModelTypes.RoadB: return new RoadB(rotation, coords);
        case ModelTypes.RoadCornerA: return new RoadCornerA(rotation, coords);
        case ModelTypes.RoadCornerB: return new RoadCornerB(rotation, coords);
        case ModelTypes.RoadJunction: return new RoadJunction(rotation, coords);
        case ModelTypes.RoadT: return new RoadT(rotation, coords);
    }
}