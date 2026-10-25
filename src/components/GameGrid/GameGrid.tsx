import './GameGrid.css'
import type { Tile } from '../../types/game'
import valleyTile from '../../assets/ValleyTile.png'
import campfireLit from '../../assets/CampFire.png'
import campfireunLit from '../../assets/UnlitCampFire.png'
import earthTile from '../../assets/EarthTile.png'
import gemReceiverTile from '../../assets/GemTile.png'
import type { resourceCarrier } from '../../utils/getProd'
import LockedTile from "../lockedTile/lockedTile"
import mineralTile from "../../assets/MineralTile.png"
import obeliskTile from "../../assets/ObeliskTile.png"
import claimedReceiver from "../../assets/ClaimedReceiver.png"
interface GameGrid {
    tiles: Tile[],
    isCampfireLit: boolean,
    handleTile: (id: number) => void,
    currentRes: resourceCarrier
}

function GameGrid({ tiles, isCampfireLit, handleTile, currentRes }: GameGrid) {
    return (
        <section className='campfire'>
            {tiles.map((tile) => {
                let tileImg: string | null = null
                let tileCont = ''
                if (tile.type === 'campfire')
                    tileImg = isCampfireLit ? campfireLit : campfireunLit
                else if (tile.type === 'valley')
                    tileImg = valleyTile
                else if (tile.type === 'earth')
                    tileImg = earthTile
                else if (tile.type === 'gemReceiver'){
                    if(tile.recieverClaimed)
                        tileImg=claimedReceiver
                    else
                        tileImg = gemReceiverTile
                }
                else if (tile.type === 'gem')
                    tileCont = "gem goes here"
                else if (tile.type === 'minerals')
                    tileImg = mineralTile
                else if (tile.type === 'obelisk')
                    tileImg = obeliskTile
                return (
                    <div className='tile' key={tile.id} style={{ gridColumn: tile.x + 6, gridRow: tile.y + 6 }}>
                        {tile.unlocked?(tileImg?(<img src={tileImg}/>): (tileCont)):(
                            <LockedTile tile={tile} currentRes={currentRes} unlock={()=>handleTile(tile.id)} isLit={isCampfireLit} />
                        )
                    }
                    </div>
                )
            })}
        </section >
    )
}
export default GameGrid