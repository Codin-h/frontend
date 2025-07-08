// based on local position, they are negative
import {Rotations, Parts} from "@/components/world-parts/Util";
import {BaseModel} from "@/components/world-parts/BaseModel";

export interface Rules {
    front: Partial<Record<Parts, Rotations[]>>;
    back: Partial<Record<Parts, Rotations[]>>;
    left: Partial<Record<Parts, Rotations[]>>;
    right: Partial<Record<Parts, Rotations[]>>;
    top: null | Partial<Record<Parts, Rotations[]>>;
    bottom: null | Partial<Record<Parts, Rotations[]>>;
}

export function getEffectiveRules(model: BaseModel): Rules {
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