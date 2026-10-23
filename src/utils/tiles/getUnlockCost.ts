import type { Tile } from "../../types/game";
import type { resourceCarrier } from "../getProd";
function getDist(x:number,y:number): number{
    return Math.abs(x)+Math.abs(y)
}
function calcCost(x:number,y:number): resourceCarrier{
    const dist = getDist(x,y)
    const wood = Math.pow((dist-1)*1.25,1.25)
    let gas = 0
    if(dist>5)
        gas = (dist-5)
    const fur = Math.pow((dist-1)*1.15,1.15)
    let mineral = 0
    if(dist>10)
       mineral = (dist-5)*1.0
    return{wood: wood, gas:gas, minerals:mineral,fur:fur}
}
export default calcCost