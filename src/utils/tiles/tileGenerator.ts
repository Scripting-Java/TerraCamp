import type { Tile } from "../../types/game";
import getStartingTiles from "./getStartingTiles";
import calcCost from "./getUnlockCost";
function generateTiles(): Tile['type'] {
    const num = Math.random()
    if (num < 0.8) return 'valley'
    if (num < 0.9) return 'earth'
    return 'minerals'
}
function build(): Tile[] {
    const tiles: Tile[] = []
    const start = getStartingTiles()
    let id = 0
    for (let y = -5; y <= 5; y++) {
        for (let x = -5; x <= 5; x++) {
            const baseCamp = x >= -1 && x <= 1 && y >= -1 && y <= 1
            let type: Tile["type"] = generateTiles()
            let gemType: Tile["gemType"]
            const starting = start.find(tile => tile.x === x && tile.y === y)
            if (baseCamp && starting)
                type = starting.type
            if (x === 0 && y === 0)
                type = "campfire"
            if ((x === -3 && y === -3) || (x === 3 && y === -3) || (x === -3 && y === 3) || (x === 3 && y === 3))
                type = 'obelisk'
            if ((x === -1 && y === 0)||(x === 1 && y === 0)||(x === 0 && y === 1)||(x === 0 && y === -1))
                type = 'gemReceiver'
            if(x=== 5 && y === 5){
                type = "gem"
                gemType = "red"
            }
            if(x=== -5 && y === 5){
                type = "gem"
                gemType = "blue"
            }
            if(x=== 5 && y === -5){
                type = "gem"
                gemType = "green"
            }
            if(x=== -5 && y === -5){
                type = "gem"
                gemType = "yellow"
            }
            const cost = calcCost(x,y)
            tiles.push({ id: id++, x, y, type, unlocked: baseCamp, cost:cost, gemType})
        }
    }
    return tiles
}

export default build