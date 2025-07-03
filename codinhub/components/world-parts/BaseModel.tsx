import {Vector3} from "three";
import {AllowedRotation, Parts, Rules} from "@/components/world-parts/Util";

export default class BaseModel {
    rules!: Rules;
    path!: string;
    name!: string;
    rotate?: AllowedRotation;
    position:Vector3;
    type: Parts = Parts.BUILDINGS;

    constructor(rules: Rules, path: string, name: string,position:Vector3 = new Vector3(0,0,0), rotate: AllowedRotation = 0, type?:Parts) {
        this.rules = rules;
        this.path = path;
        this.rotate = rotate;
        this.position = position;
        this.name = name;
        if (type !== undefined) {
            this.type = type;
        }
    }

    get effectiveRules(): Rules {
        if (!this.rotate) return this.rules;
        const steps = this.getRotationSteps(this.rotate);
        return this.rotateRules(steps);
    }

    private getRotationSteps(z: AllowedRotation): number {
        switch (z) {
            case AllowedRotation.Zero: return 0;
            case AllowedRotation.HalfPi: return 1;
            case AllowedRotation.Pi: return 2;
            case AllowedRotation.MinusHalfPi: return 3;
        }
    }

    private rotateRules(steps: number): Rules {
        if (steps === 0) return this.rules;

        let rotated = this.rules;
        for (let i = 0; i < steps; i++) {
            rotated = this.rotate90CCW(rotated);
        }
        return rotated;
    }

    private rotate90CCW(rules: Rules): Rules {
        return {
            front: rules.right,
            right: rules.back,
            back: rules.left,
            left: rules.front,
            top: rules.top,
            bottom: rules.bottom
        };
    }
}
