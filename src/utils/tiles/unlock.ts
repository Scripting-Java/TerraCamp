import type { Tile } from "../../types/game";

function unlock(tiles: Tile[], id: number): Tile[]{
    const tile = tiles.find(tile => tile.id === id)
    if(!tile||tile.unlocked) 
        return tiles
    const adjacent = tiles.some(test=>test.unlocked&&((Math.abs(test.x-tile.x)===1&&test.y===tile.y)||(Math.abs(test.y-tile.y)===1&&test.x===tile.x)))
    if(!adjacent) return tiles
    return tiles.map(test=>test.id===id?{...test,unlocked:true}:test)
}
export default unlock