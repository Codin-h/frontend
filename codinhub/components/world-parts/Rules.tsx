import {Rotations, Rules} from "@/components/world-parts/Util";
import {BaseModel} from "@/components/world-parts/BaseModel";
import {Vector3} from "three";


export default function getRulesBasedOnOrientation(model: BaseModel, coords:Vector3) {
    const rules: Rules = getEffectiveRules(model);
    const modelCoords: Vector3 = model.position;

    const x = coords.x - modelCoords.x; // this would be x in the horizontal plane
    const y = coords.y - modelCoords.y; // this would be "z" in the vertical plane
    const z = coords.z - modelCoords.z; // this would be "y" in the horizontal plane

    if (x > 0) {
        return rules.right;
    } else if (x < 0) {
        return rules.left;
    } else if (z > 0) {
        return rules.front;
    } else if (z < 0) {
        return rules.back;
    } else if (y > 0) {
        return rules.top;
    } else if (y < 0) {
        return rules.bottom;
    }

}

function getEffectiveRules(model: BaseModel): Rules {
    const rules:Rules = model.getRules();
     if (!model.rotate) return rules;
     const steps = getRotationSteps(model.rotate);
     return rotateRules(steps, rules);
}

function getRotationSteps(z: Rotations): number {
     switch (z) {
         case Rotations.Zero: return 0;
         case Rotations.HalfPi: return 1;
         case Rotations.Pi: return 2;
         case Rotations.MinusHalfPi: return 3;
     }
}

function rotateRules(steps: number, rules:Rules): Rules {
     if (steps === 0) return rules;

     let rotated = rules;
     for (let i = 0; i < steps; i++) {
         rotated = rotate90CCW(rotated);
     }
     return rotated;
}

function rotate90CCW(rules: Rules): Rules {
     return {
         front: rules.right,
         right: rules.back,
         back: rules.left,
         left: rules.front,
         top: rules.top,
         bottom: rules.bottom
     };
}