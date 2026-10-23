import './GameGrid.css'
import type { Tile } from '../../types/game'
import valleyTile from '../../assets/ValleyTile.png'
import campfireLit from '../../assets/CampFire.png'
import campfireunLit from '../../assets/UnlitCampFire.png'
import earthTile from '../../assets/EarthTile.png'
import gemReceiverTile from '../../assets/GemTile.png'
interface GameGrid {
    tiles: Tile[],
    isCampfireLit: boolean,
    handleTile: (id: number)=>void
}

function GameGrid({ tiles, isCampfireLit, handleTile }: GameGrid) {
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
                else if (tile.type === 'gemReceiver')
                    tileImg = gemReceiverTile
                else if (tile.type === 'gem')
                    tileCont = "gem goes here"
                else if (tile.type === 'minerals')
                    tileCont = 'Mineral goes here'
                else if (tile.type === 'obelisk')
                    tileCont = 'obelisk goes here'
                else if (tile.type === 'locked')
                    tileCont = 'This tile is locked'
                return (
                        <div className='tile' key={tile.id} style={{gridColumn:tile.x+6, gridRow:tile.y+6}} onClick={()=>handleTile(tile.id)}>
                            {tileImg ? (<img src={tileImg} />) : (tile.type)}
                        </div>
                )
            })}
        </section>
    )
}
export default GameGrid