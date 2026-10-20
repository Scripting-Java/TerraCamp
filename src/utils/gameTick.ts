import getProduction from "./getProd";
import type { resourceCarrier } from "./getProd";
import type { Tile } from "../types/game";
function moveTick(prev: resourceCarrier, tiles: Tile[]): resourceCarrier {
    const prod = getProduction(tiles)
    return {
        wood: prev.wood + prod.wood/60,
        fur: prev.fur + prod.fur/60,
        gas: prev.gas + prod.gas/60,
        minerals: prev.minerals + prod.minerals/60,
    }
} 
export default moveTick