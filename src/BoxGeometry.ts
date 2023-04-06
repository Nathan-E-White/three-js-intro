import {BoxGeometry} from "three";

interface IBoxGeometry extends BoxGeometry {
    width: number;
    height: number;
    depth: number;
    widthSegments: bigint;
    heightSegments: bigint;
    depthSegments: bigint;
}