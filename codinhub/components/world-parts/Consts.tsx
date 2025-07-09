import {Rotations, ModelTypes, Parts, Rules} from "@/components/world-parts/Util";

export const RULES_BUILDINGS = {
    front: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [ Rotations.HalfPi, Rotations.Pi],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi],
    },
    back: {
        [Parts.BUILDINGS]: [Rotations.Zero],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [ Rotations.MinusHalfPi, Rotations.Zero],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Zero, Rotations.MinusHalfPi, Rotations.Pi],
    },
    left: {
        [Parts.BUILDINGS]: [Rotations.HalfPi],
        [Parts.ROADS]: [Rotations.MinusHalfPi, Rotations.HalfPi],
        [Parts.CORNERS]: [ Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [Rotations.MinusHalfPi, Rotations.Zero, Rotations.HalfPi, Rotations.Pi],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi, Rotations.Zero, Rotations.HalfPi],
    },
    right: {
        [Parts.BUILDINGS]: [Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.MinusHalfPi, Rotations.HalfPi],
        [Parts.CORNERS]: [ Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [Rotations.MinusHalfPi, Rotations.Zero, Rotations.HalfPi, Rotations.Pi],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi, Rotations.Zero, Rotations.HalfPi],
    },
    top: null,
    bottom: null
}

export const RULES_ROADS:Rules = {
    front: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [ Rotations.Zero, Rotations.Pi ],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.Pi],
    },
    back: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [ Rotations.HalfPi, Rotations.Pi ],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.HalfPi],
    },
    left: {
        [Parts.BUILDINGS]: [],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [ Rotations.HalfPi, Rotations.Zero ],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi],
    },
    right: {
        [Parts.BUILDINGS]: [],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [ Rotations.MinusHalfPi, Rotations.Pi ],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi, Rotations.HalfPi, Rotations.Pi],
    },
    top: null,
    bottom: null
}

export const RULES_CORNERS:Rules = {
    front: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi],
    },
    back: {
        [Parts.BUILDINGS]: [],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Zero, Rotations.Pi, Rotations.MinusHalfPi],
    },
    left: {
        [Parts.BUILDINGS]: [],
        [Parts.ROADS]: [Rotations.MinusHalfPi, Rotations.HalfPi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Zero, Rotations.HalfPi, Rotations.MinusHalfPi],
    },
    right: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.Zero],
    },
    top: null,
    bottom: null
}

export const RULES_JUNCTION:Rules = {
    front: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi],
    },
    back: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Pi, Rotations.HalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.HalfPi],
    },
    left: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.Pi],
    },
    right: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.Zero],
    },
    top: null,
    bottom: null
}

export const RULES_TSPLIT:Rules = {
    front: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.MinusHalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.MinusHalfPi],
    },
    back: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Pi, Rotations.HalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.HalfPi],
    },
    left: {
        [Parts.BUILDINGS]: [],
        [Parts.ROADS]: [Rotations.HalfPi, Rotations.MinusHalfPi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.TSPLIT]: [Rotations.Pi, Rotations.MinusHalfPi, Rotations.HalfPi],
    },
    right: {
        [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
        [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
        [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
        [Parts.JUNCTION]: [],
        [Parts.TSPLIT]: [Rotations.Zero],
    },
    top: null,
    bottom: null
}

// export const RULES_VOID = {
//     [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
//     [Parts.ROADS]: [Rotations.Zero, Rotations.Pi],
//     [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi],
//     [Parts.JUNCTION]: [],
//     [Parts.TSPLIT]: [Rotations.Zero],
// }

export const weights: Record<ModelTypes, number>  = {
    [ModelTypes.BuildingA]: 1,
    [ModelTypes.BuildingB]: .2,
    [ModelTypes.BuildingC]: .1,
    [ModelTypes.BuildingD]: .1,
    [ModelTypes.BuildingE]: .1,
    [ModelTypes.BuildingF]: .1,
    [ModelTypes.BuildingG]: .1,
    [ModelTypes.BuildingH]: .1,
    [ModelTypes.RoadA]: 1,
    [ModelTypes.RoadB]: .9,
    [ModelTypes.RoadCornerA]: 0.7,
    [ModelTypes.RoadCornerB]: 0.7,
    [ModelTypes.RoadJunction]: 0.5,
    [ModelTypes.RoadT]: 0.5
}

export const partToModelTypes: Record<Parts, ModelTypes[]> = {
    [Parts.BUILDINGS]: [
        ModelTypes.BuildingA, ModelTypes.BuildingB, ModelTypes.BuildingC, ModelTypes.BuildingD,
        ModelTypes.BuildingE, ModelTypes.BuildingF, ModelTypes.BuildingG, ModelTypes.BuildingH
    ],
    [Parts.ROADS]: [
        ModelTypes.RoadA, ModelTypes.RoadB
    ],
    [Parts.CORNERS]: [
        ModelTypes.RoadCornerA, ModelTypes.RoadCornerB
    ],
    [Parts.JUNCTION]: [
        ModelTypes.RoadJunction
    ],
    [Parts.TSPLIT]: [
        ModelTypes.RoadT
    ]
};

export const ALL_POSSIBLE_PARTS: Partial<Record<Parts, Rotations[]>> = {
    [Parts.BUILDINGS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
    [Parts.ROADS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
    [Parts.CORNERS]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
    [Parts.JUNCTION]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
    [Parts.TSPLIT]: [Rotations.Zero, Rotations.HalfPi, Rotations.Pi, Rotations.MinusHalfPi],
}
