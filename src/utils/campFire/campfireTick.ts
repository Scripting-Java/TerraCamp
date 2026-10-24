import type { campfireStatus } from "./campfire";
import { dayFuel, nightFuel, gracePeriod } from "./campfire";
import type { resourceCarrier } from "../getProd";
import type { phase } from "../Phase/dayNightCycle";

interface campfireTick {
    campfire: campfireStatus,
    resources: resourceCarrier
}

function campfireTick(campfire: campfireStatus, res: resourceCarrier, phase: phase): campfireTick {
    const fuelInt = phase === 'day' ? dayFuel : nightFuel
    const newElapsed = campfire.elapsed + 1
    if (!campfire.lit) {
        if (res.wood >= 1) {
            return { campfire: { ...campfire, lit: true, elapsed: 0, grace: 0 }, resources: { ...res, wood: res.wood - 1 } }
        }
        return { campfire:{...campfire, elapsed:0}, resources: res }
    }
    if (res.wood >= 1 && newElapsed>=fuelInt) {
        return { campfire: { ...campfire, elapsed: 0, grace: 0 }, resources: { ...res, wood: res.wood - 1 } }
    }
    if(newElapsed<fuelInt)
        return {campfire: {...campfire, elapsed: newElapsed}, resources: res}
    const newGrace = campfire.grace + 1
    if (newGrace >= gracePeriod) {
        return { campfire: { ...campfire, lit: false, elapsed: 0, grace: gracePeriod }, resources: res }
    }
    return { campfire: { ...campfire, grace: newGrace, elapsed:newElapsed }, resources: res }


}
export default campfireTick