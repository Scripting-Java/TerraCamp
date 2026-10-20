import './GameGrid.css'
import type { Tile } from '../../types/game'

interface GameGrid {
    tiles: Tile[]
}

function GameGrid({ tiles }: GameGrid) {
    return (
        <section className='campfire'>
            {tiles.map((tile) => {
                let tileCont = ''
                if (tile.type === 'campfire')
                    tileCont = 'Fire goes here'
                else if (tile.type === 'valley')
                    tileCont = 'Valley goes here'
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
                        {tileCont}
                    </div>
                )
            })}
        </section>
    )
}
export default GameGrid