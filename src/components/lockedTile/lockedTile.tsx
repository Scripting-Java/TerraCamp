import type { Tile } from "../../types/game";
import './lockedTile.css'


interface lockedTile{
    tile: Tile,
    unlock: ()=>void
}

function lockedTile({tile,unlock}:lockedTile){
    const cost = tile.cost
    return(
        <div className="locked">
            <img src=""
        </div>
    )
}