import {Rotations, ModelTypes, Parts} from "@/components/world-parts/Util";
import {Rules} from "@/components/world-parts/Rules";

export const RULES_BUILDINGS:Rules = {
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
    [ModelTypes.BuildingA]: .9,
    [ModelTypes.BuildingB]: .9,
    [ModelTypes.BuildingC]: .9,
    [ModelTypes.BuildingD]: .9,
    [ModelTypes.BuildingE]: .9,
    [ModelTypes.BuildingF]: .9,
    [ModelTypes.BuildingG]: .9,
    [ModelTypes.BuildingH]: .9,
    [ModelTypes.RoadA]: .9,
    [ModelTypes.RoadB]: .5,
    [ModelTypes.RoadCornerA]: 0.7,
    [ModelTypes.RoadCornerB]: 0.7,
    [ModelTypes.RoadJunction]: 0.5,
    [ModelTypes.RoadT]: 0.5
}