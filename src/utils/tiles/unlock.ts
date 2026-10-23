import type { Tile } from "../../types/game";
import type { resourceCarrier } from "../getProd";
interface unlockTile{
    tiles: Tile[],
    resources: resourceCarrier
}
function unlock(tiles: Tile[], id: number, res: resourceCarrier): unlockTile| null{
    const tile = tiles.find(tile => tile.id === id)
    if(!tile||tile.unlocked||!tile.cost) 
        return null 
    const adjacent = tiles.some(test=>test.unlocked&&((Math.abs(test.x-tile.x)===1&&test.y===tile.y)||(Math.abs(test.y-tile.y)===1&&test.x===tile.x)))
    if(!adjacent) 
        return null
    const wood = tile.cost.wood
    const gas = tile.cost.gas
    const fur = tile.cost.fur
    const minerals = tile.cost.minerals
    if(res.wood<wood||res.gas<gas||res.fur<fur||res.minerals<minerals)
        return null
    const afterRes = {wood:res.wood-wood,gas:res.gas-gas,fur:res.fur-fur,minerals: res.minerals-minerals}
    const afterTiles = tiles.map(test=>test.id===id ? {...test, unlocked:true}: test)
    return {tiles:afterTiles, resources: afterRes}
}
export default unlock