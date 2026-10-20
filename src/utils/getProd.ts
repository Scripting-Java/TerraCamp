import type { Tile } from "../types/game";
function getNumTiles(tiles: Tile[], type: Tile['type']): number {
    let count = 0
    for(const tile of tiles){
        if(tile.type === type)
            count++
    }
    return count
}

function resPerMin(tiles: Tile[], type: Tile['type'], prod: number): number{
    return prod*getNumTiles(tiles,type)
}

export interface resourceCarrier{
    wood: number,
    gas: number,
    fur:number,
    minerals: number,
}

function getProduction(tiles: Tile[]): resourceCarrier{
    return{
        wood: resPerMin(tiles, 'valley', 1),
        gas: resPerMin(tiles, 'earth', 0.2),
        minerals: resPerMin(tiles, 'minerals', 0.2),
        fur: resPerMin(tiles,'valley',0.5)
    }
}

export default getProduction