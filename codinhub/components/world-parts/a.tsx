import { Vector3 } from "three";
import { BaseModel } from "./BaseModel";
import BuildingA from "./buildings/BuildingA";
import BuildingB from "./buildings/BuildingB";
import BuildingC from "./buildings/BuildingC";
import BuildingD from "./buildings/BuildingD";
import BuildingE from "./buildings/BuildingE";
import BuildingF from "./buildings/BuildingF";
import BuildingG from "./buildings/BuildingG";
import BuildingH from "./buildings/BuildingH";
import RoadA from "./roads/RoadA";
import RoadB from "./roads/RoadB";
import RoadCornerA from "./roads/RoadCornerA";
import RoadCornerB from "./roads/RoadCornerB";
import RoadJunction from "./roads/RoadJunction";
import RoadT from "./roads/RoadT";
import {ModelTypes, Rotations} from "@/components/world-parts/Util";

export function modelFromData(type: ModelTypes, rotation: Rotations, coords:Vector3): BaseModel {
    switch (type) {
        case ModelTypes.BUILDING_A: return new BuildingA(rotation, coords);
        case ModelTypes.BUILDING_B: return new BuildingB(rotation, coords);
        case ModelTypes.BUILDING_C: return new BuildingC(rotation, coords);
        case ModelTypes.BUILDING_D: return new BuildingD(rotation, coords);
        case ModelTypes.BUILDING_E: return new BuildingE(rotation, coords);
        case ModelTypes.BUILDING_F: return new BuildingF(rotation, coords);
        case ModelTypes.BUILDING_G: return new BuildingG(rotation, coords);
        case ModelTypes.BUILDING_H: return new BuildingH(rotation, coords);
        case ModelTypes.ROAD_A: return new RoadA(rotation, coords);
        case ModelTypes.ROAD_B: return new RoadB(rotation, coords);
        case ModelTypes.CORNER_A: return new RoadCornerA(rotation, coords);
        case ModelTypes.CORNER_B: return new RoadCornerB(rotation, coords);
        case ModelTypes.JUNCTION: return new RoadJunction(rotation, coords);
        case ModelTypes.INTERSECTION: return new RoadT(rotation, coords);
    }
}
