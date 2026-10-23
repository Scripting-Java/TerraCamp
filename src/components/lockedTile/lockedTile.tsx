import type { Tile } from "../../types/game";
import locked from "../../assets/LockedTile.png"
import './lockedTile.css'
import type { resourceCarrier } from "../../utils/getProd";
import formatRes from "../../utils/formatters/formatters";


interface lockedTile {
    tile: Tile,
    unlock: () => void,
    currentRes: resourceCarrier
}

function lockedTile({ tile, unlock, currentRes }: lockedTile) {
    return (
        <div className="locked">
            <img src={locked} />
            <div className="tooltip">
                <h4>Unlock:</h4>
                <p>Wood: {formatRes(currentRes.wood)}/{(formatRes(tile.cost?.wood ?? 0))}</p>
                <p>Fur: {formatRes(currentRes.fur)}/{(formatRes(tile.cost?.fur ?? 0))}</p>
                <p>Gas: {formatRes(currentRes.gas)}/{(formatRes(tile.cost?.gas ?? 0))}</p>
                <p>Minerals: {formatRes(currentRes.minerals)}/{(formatRes(tile.cost?.minerals ?? 0))}</p>
                <button onClick={unlock}>
                    Unlock
                </button>
            </div>
        </div>
    )
}