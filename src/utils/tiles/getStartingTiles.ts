import type { Tile } from "../../types/game";
function getStartingTiles(): Tile[]{
    const tiles: Tile[] = []
    let earthGiven: boolean = false;
    let numEarthGiven: number = 0;
    for(let i =0; i<9;i++){
        let tileType: Tile['type']
        if(i===4)
            tileType = 'campfire'
        if(i===1 || i===3||i===5||i===7)
            tileType = 'gem'
        else{
            let num = Math.random()
            if(num<0.8)
                tileType = 'valley'
            else if(numEarthGiven>=2)
                tileType='valley'
            else{
                tileType = 'earth'
                earthGiven = true
                numEarthGiven++
            }
        }
        if(i===8 && !earthGiven){
            tileType = 'earth'
        }
        tiles.push({id:i, type: tileType, x: (i%3)-1, y: Math.floor(i/3)-1, unlocked:true})
    }
    return tiles
}
export default getStartingTiles