import type { Tile } from "../../types/game";

function getVisible(tiles: Tile[]): Tile[]{
    return tiles.filter(tile=>tile.unlocked||tiles.some(other=>other.unlocked && ((Math.abs(other.x-tile.x) === 1 && other.y===tile.y)||(Math.abs(other.y-tile.y)===1&&other.x===tile.x))))
}
export default getVisible