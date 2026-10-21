import getProduction from "./getProd";
import type { resourceCarrier } from "./getProd";
import type { Tile } from "../types/game";
import type { campfireStatus } from "./campFire/campfire";
import campfireTick from "./campFire/campfireTick";
import type { phase } from "./Phase/dayNightCycle";

interface gameTick{
    resource: resourceCarrier,
    campfire: campfireStatus
}

function moveTick(prev: resourceCarrier, tiles: Tile[], campfire: campfireStatus, phase: phase): gameTick {
    const prod = getProduction(tiles)
    const produced: resourceCarrier = {
        wood: prev.wood + prod.wood/60,
        fur: prev.fur + prod.fur/60,
        gas: prev.gas + prod.gas/60,
        minerals: prev.minerals + prod.minerals/60,
    }

    const result = campfireTick(campfire, produced, phase )
    return{
        resource: result.resources,
        campfire: result.campfire
    }
} 
export default moveTick