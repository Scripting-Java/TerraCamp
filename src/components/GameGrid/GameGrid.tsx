import './GameGrid.css'
import type { Tile } from '../../types/game'
import valleyTile from '../../assets/ValleyTile.png'
import campfireLit from '../../assets/CampFire.png'
import campfireunLit from '../../assets/UnlitCampFire.png'
interface GameGrid {
    tiles: Tile[],
    isCampfireLit:boolean
}

function GameGrid({ tiles, isCampfireLit }: GameGrid) {
    return (
        <section className='campfire'>
            {tiles.map((tile) => {
                let tileImg: string | null = null
                let tileCont = ''
                if (tile.type === 'campfire'){
                    tileCont = 'Fire goes here'
                    tileImg = isCampfireLit? campfireLit: campfireunLit
                }else if (tile.type === 'valley'){
                    tileCont = 'Valley goes here'
                    tileImg = valleyTile
                }
                else if (tile.type === 'earth')
                    tileCont = 'Gas production goes here'
                else if (tile.type === 'gem')
                    tileCont = 'Gem goes here'
                else if (tile.type === 'minerals')
                    tileCont = 'Mineral goes here'
                else if (tile.type === 'obelisk')
                    tileCont = 'obelisk goes here'

                return (
                    <div className='tile' key={tile.id}>
                        {tileImg?(<img src={tileImg}/>):(tile.type)}
                    </div>
                )
            })}
        </section>
    )
}
export default GameGrid