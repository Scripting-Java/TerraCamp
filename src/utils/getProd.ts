import type { Tile } from "../types/game";
function getNumTiles(tiles: Tile[], type: Tile['type']): number {
    let count = 0
    for(const tile of tiles){
        if(tile.type === type && tile.unlocked)
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
export interface gemCarrier{
    hasRed:boolean
    hasGreen:boolean
    hasBlue:boolean
    hasYellow:boolean
}
function hasBoost(tiles: Tile[]): boolean{
    for(const tile of tiles){
        if(tile.type === "gem" || tile.type === "obelisk")
            return true
    }
    return false
}
function whichGem(tiles:Tile[]): gemCarrier{
    let hasRed = false
    let hasGreen = false
    let hasBlue = false
    let hasYellow = false
    for(const tile of tiles){
        if(tile.gemType === "red" && tile.unlocked)
            hasRed=true
        if(tile.gemType === "green" && tile.unlocked)
            hasGreen=true
        if(tile.gemType==="blue" && tile.unlocked)
            hasBlue = true
        if(tile.gemType==="yellow" && tile.unlocked)
            hasYellow =true
    }
    return{hasRed:hasRed, hasBlue:hasBlue,hasGreen:hasGreen,hasYellow:hasYellow}
}

function calcBoost(tiles:Tile[]): resourceCarrier{
    let woodMult = 1
    let furMult = 1
    let gasMult = 1
    let mineralsMult = 1
    const obTiles = getNumTiles(tiles, "obelisk")
    const gems = whichGem(tiles)
    if(gems.hasBlue){
        woodMult += 0.2
        furMult += 0.15
    }
    if(gems.hasGreen)
        furMult += 0.15
    if(gems.hasYellow){
        gasMult+=0.1
        mineralsMult+=0.05
    }
    if(gems.hasRed){
        woodMult+=0.15
        furMult+=0.1
        gasMult+=0.1
        mineralsMult+=0.075
    }
    if(obTiles>0){
    woodMult+=obTiles*0.1
    furMult+=obTiles*0.1
    gasMult+=obTiles*0.1
    mineralsMult+=obTiles*0.1
    }
    return{
        wood: resPerMin(tiles,'valley',0.5*woodMult),
        gas: resPerMin(tiles, 'earth', 0.05*gasMult),
        minerals: resPerMin(tiles, 'minerals', 0.05*mineralsMult),
        fur: resPerMin(tiles,'valley',0.2*furMult)
    }
}

function getProduction(tiles: Tile[]): resourceCarrier{
    if(hasBoost(tiles))
        return calcBoost(tiles)
    return{
        wood: resPerMin(tiles, 'valley', 0.5),
        gas: resPerMin(tiles, 'earth', 0.05),
        minerals: resPerMin(tiles, 'minerals', 0.05),
        fur: resPerMin(tiles,'valley',0.2)
    }
}

export default getProduction