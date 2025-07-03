export enum AllowedRotation {
    Zero = 0,
    HalfPi = Math.PI / 2,
    Pi = Math.PI,
    MinusHalfPi = -Math.PI / 2
}

export enum Parts { BUILDINGS, ROADS, CORNERS, JUNCTION, TSPLIT}

// based on local position, they are negative
export interface Rules {
    front: Partial<Record<Parts, AllowedRotation[]>>;
    back: Partial<Record<Parts, AllowedRotation[]>>;
    left: Partial<Record<Parts, AllowedRotation[]>>;
    right: Partial<Record<Parts, AllowedRotation[]>>;
    top: null | Partial<Record<Parts, AllowedRotation[]>>;
    bottom: null | Partial<Record<Parts, AllowedRotation[]>>;
}



export const RULES_BUILDINGS:Rules = {
    front: {
        [Parts.BUILDINGS]: [AllowedRotation.Zero, AllowedRotation.HalfPi, AllowedRotation.Pi, AllowedRotation.MinusHalfPi],
        [Parts.JUNCTION]: [AllowedRotation.Zero, AllowedRotation.HalfPi, AllowedRotation.Pi, AllowedRotation.MinusHalfPi],
        [Parts.CORNERS]: [ AllowedRotation.HalfPi, AllowedRotation.Pi, AllowedRotation.MinusHalfPi],
    },
    back: {},
    left: {},
    right: {},
    top: null,
    bottom: null
}