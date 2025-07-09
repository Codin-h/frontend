import {ALL_POSSIBLE_PARTS, weights} from "@/components/world-parts/Consts";
import {getRotation, ModelTypes, Rotations} from "@/components/world-parts/Util";
import {computeEntropy, modelFromType_Rotation, updatePossibleParts} from "@/components/wave/Utils";
import {Vector3} from "three";
import {BaseModel} from "@/components/world-parts/BaseModel";

const X = 10;
const Z = 10;
const Y = 1;
const grid: (BaseModel | BaseModel[] | 0)[] = Array(Y).fill(0).map(() => Array(X * Z).fill(0));

export function WorldGen() {
    // Collapse the first cell using generalized collapse function
    const firstModel = collapseCell(
        new Vector3(
            Math.floor(Math.random() * X),
            Math.floor(Math.random() * Y),
            Math.floor(Math.random() * Z)
        )
    );

    let neighbors: Vector3[] = getNeighbors(firstModel.position);
    let neighbors_entropy: number[] = [];

    for (const neighbor of neighbors) {
        const neighborValue = grid[neighbor.y][neighbor.x * Z + neighbor.z];
        const update = updatePossibleParts(
            firstModel,
            neighbor,
            neighborValue === 0 ? ALL_POSSIBLE_PARTS : neighborValue
        );

        grid[neighbor.y][neighbor.x * Z + neighbor.z] = update;
        neighbors_entropy.push(computeEntropy(update));
    }

    // Find and collapse the lowest entropy neighbor
    const minEntropy = Math.min(...neighbors_entropy);
    const minIndex = neighbors_entropy.indexOf(minEntropy);
    const nextNeighbor = neighbors[minIndex];

    collapseCell(nextNeighbor); // Collapse using the same generalized function

    return grid;
}

// Generalized cell collapse function
function collapseCell(position: Vector3): BaseModel {
    const x = Math.floor(position.x);
    const y = Math.floor(position.y);
    const z = Math.floor(position.z);
    const colIndex = x * Z + z;

    // Get current possibilities (0 means all possible)
    const current = grid[y][colIndex];
    const possibilities = current === 0 ? ALL_POSSIBLE_PARTS : current;

    // Select model type based on weights
    const modelTypes = Object.keys(weights) as ModelTypes[];
    const totalWeight = modelTypes.reduce((sum, type) => sum + weights[type], 0);
    const randomValue = Math.random() * totalWeight;

    let accumulatedWeight = 0;
    for (const type of modelTypes) {
        accumulatedWeight += weights[type];
        if (randomValue <= accumulatedWeight) {
            const rotationIndex = Math.floor(Math.random() * 4);
            const model = modelFromType_Rotation(
                type,
                getRotation(rotationIndex),
                new Vector3(x * 2, y * 2, z * 2)
            );

            grid[y][colIndex] = model;
            return model;
        }
    }

    throw new Error(`Collapse failed at (${x}, ${y}, ${z})`);
}

function getNeighbors(position: Vector3): Vector3[] {
    const x = position.x / 2;  // Grid coordinates
    const y = position.y / 2;
    const z = position.z / 2;

    const neighbors = [];
    const directions = [
        { dx: 1, dy: 0, dz: 0 }, // right
        { dx: -1, dy: 0, dz: 0 }, // left
        { dx: 0, dy: 0, dz: 1 }, // front
        { dx: 0, dy: 0, dz: -1 }, // back
        { dx: 0, dy: 1, dz: 0 }, // top
        { dx: 0, dy: -1, dz: 0 } // bottom
    ];

    for (const { dx, dy, dz } of directions) {
        const nx = x + dx;
        const ny = y + dy;
        const nz = z + dz;

        if (
            nx >= 0 && nx < X &&
            ny >= 0 && ny < Y &&
            nz >= 0 && nz < Z
        ) {
            neighbors.push(new Vector3(nx, ny, nz));
        }
    }
    return neighbors;
}