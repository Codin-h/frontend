export enum Rotations {
    Zero = 0,
    HalfPi = Math.PI / 2,
    Pi = Math.PI,
    MinusHalfPi = -Math.PI / 2
}

export function getRotation(index:number) {
    switch (index) {
        case 0: return Rotations.Zero;
        case 1: return Rotations.HalfPi;
        case 2: return Rotations.Pi;
        case 3: return Rotations.MinusHalfPi;
        default: throw new Error(`Invalid rotation index: ${index}`);
    }
}

export enum Parts { BUILDINGS, ROADS, CORNERS, JUNCTION, TSPLIT}

// based on local position, they are negative
export interface Rules {
    front: Partial<Record<Parts, Rotations[]>>;
    back: Partial<Record<Parts, Rotations[]>>;
    left: Partial<Record<Parts, Rotations[]>>;
    right: Partial<Record<Parts, Rotations[]>>;
    top: null | Partial<Record<Parts, Rotations[]>>;
    bottom: null | Partial<Record<Parts, Rotations[]>>;
}

export enum ModelTypes {
    BuildingA = 'BuildingA',
    BuildingB = 'BuildingB',
    BuildingC = 'BuildingC',
    BuildingD = 'BuildingD',
    BuildingE = 'BuildingE',
    BuildingF = 'BuildingF',
    BuildingG = 'BuildingG',
    BuildingH = 'BuildingH',
    RoadA = 'RoadA',
    RoadB = 'RoadB',
    RoadCornerA = 'RoadCornerA',
    RoadCornerB = 'RoadCornerB',
    RoadJunction = 'RoadJunction',
    RoadT = 'RoadT',
}

