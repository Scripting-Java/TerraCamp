import type { Tile } from "../../types/game";
import locked from "../../assets/LockedTile.png"
import './lockedTile.css'
import type { resourceCarrier } from "../../utils/getProd";
import formatRes from "../../utils/formatters/formatters";


interface lockedTile {
    tile: Tile,
    unlock: () => void,
    currentRes: resourceCarrier,
    isLit: boolean
}

function lockedTile({ tile, unlock, currentRes, isLit}: lockedTile) {
    return (
        <div className="locked">
            <img src={locked} />
            {isLit ? (
            <div className="locktooltip">
                <h4>Unlock:</h4>
                {(tile.cost?.wood ?? 0) > 0 && (
                    <p>Wood: {formatRes(currentRes.wood)}/{(formatRes(tile.cost?.wood ?? 0))}</p>
                )}
                {(tile.cost?.fur ?? 0) > 0 && (
                    <p>Fur: {formatRes(currentRes.fur)}/{(formatRes(tile.cost?.fur ?? 0))}</p>
                )}
                {(tile.cost?.gas ?? 0) > 0 && (
                    <p>Gas: {formatRes(currentRes.gas)}/{(formatRes(tile.cost?.gas ?? 0))}</p>
                )}
                {(tile.cost?.minerals ?? 0) > 0 && (
                    <p>Minerals: {formatRes(currentRes.minerals)}/{(formatRes(tile.cost?.minerals ?? 0))}</p>
                )}
                <button onClick={unlock}>
                    Unlock
                </button>
            </div>
            ):(
                <div className="fireIsOutSoNoUnlock">
                    <h4>You need to relight the campfire with 1 wood before unlocking new tiles!</h4>
                </div>
            )}
        </div>
    )
}
export default lockedTile