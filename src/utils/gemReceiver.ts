import type { Tile } from "../types/game";

function getDist(tile1: Tile, tile2: Tile): number{
    const x = Math.abs(tile1.x-tile2.x)
    const y = Math.abs(tile1.y-tile2.y)
    return x+y
}

function getClosestReceiverTile(tiles: Tile[], gem: Tile): Tile|null{
    const recievers = tiles.filter(tile => tile.type === "gemReceiver")
    const unclaimedRecievers =recievers.filter(tile=>!tile.recieverClaimed)
    if(unclaimedRecievers.length===0)
        return null
    let closest= unclaimedRecievers[0]
    let closestDist = 50
    for(const rec of unclaimedRecievers){
        const dist = getDist(gem, rec)
        if(dist<closestDist){
            closestDist=dist
            closest = rec
        }
    }
    return closest
}

export default getClosestReceiverTile