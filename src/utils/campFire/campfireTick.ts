import type { campfireStatus } from "./campfire";
import { dayFuel, nightFuel, gracePeriod } from "./campfire";
import type { resourceCarrier } from "../getProd";
import type { phase } from "../Phase/dayNightCycle";

interface campfireTick {
    campfire: campfireStatus,
    resources: resourceCarrier
}

function campfireTick(campfire: campfireStatus, res: resourceCarrier, phase: phase): campfireTick {
    if (!campfire.lit){
        if(res.wood>=1){
            return{campfire:{...campfire, lit: true, elapsed: 0, grace:0}, resources:res}
        }
        return {campfire,resources:res}
    }
    const fuelInt = phase === 'day' ? dayFuel : nightFuel

    if (res.wood < 1) {
        const newGrace = campfire.grace + 1
        if (newGrace >= gracePeriod) {
            return {
                campfire: {
                    ...campfire, lit: false, grace: gracePeriod, elapsed: 0
                }, resources:res
            }
        }
        return {
            campfire: {
                ...campfire, grace: newGrace
            }, resources:res
        }
    }
    const newElapsed = campfire.elapsed + 1
    if (newElapsed >= fuelInt) {
        return {
            campfire: {
                ...campfire, elapsed: 0, grace: 0
            },
            resources: {
                ...res, wood: res.wood - 1
            }
        }
    }
    return{
        campfire:{
            ...campfire,elapsed:newElapsed,grace:0
        },
        resources:res
    }


}
export default campfireTick