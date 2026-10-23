import TopBar from './components/TopBar/TopBar'
import GameGrid from './components/GameGrid/GameGrid'
import type { Tile } from './types/game'
import unlock from './utils/tiles/unlock'
import getVisible from './utils/tiles/getVisible'
import moveTick from './utils/gameTick'
import type { campfireStatus } from './utils/campFire/campfire'
import { handleDayNight } from './utils/Phase/dayNightCycle'
import getProduction from './utils/getProd'
import SideBar from './components/SideBar/SideBar'
import InfoToggle from './components/InfoToggle/InfoToggle'
import build from './utils/tiles/tileGenerator'

import { useState, useEffect } from 'react'
import './App.css'


interface game {
  elapsedSec: number,
  res: { wood: number, gas: number, fur: number, minerals: number }
  campfire: campfireStatus
}
function App() {
  const [game, setGame] = useState<game>({
    elapsedSec: 0,
    res: { wood: 0, gas: 0, fur: 0, minerals: 0 },
    campfire: { lit: true, elapsed: 0, grace: 0, tier: 'small', style: 'default' }
  })
  const [info,setInfo] = useState(false)
  const time = handleDayNight(game.elapsedSec)
  const [tiles, setTiles] = useState<Tile[]>(()=>build())
  const prod = getProduction(tiles)
  const rates = {
    woodGain: prod.wood/60,
    woodUse: game.campfire.lit?(time.phase==='day' ? 1/120: 1/30):0,
    gasGain: prod.gas/60,
    furGain: prod.fur/60,
    mineralsGain: prod.minerals/60
  }
  const [infoPos, setInfoPos] = useState({x:100,y:200})
  useEffect(() => {
    const interval = setInterval(() => {
      setGame(prev => {
        const elapsedSec = prev.elapsedSec + 1
        const next = handleDayNight(elapsedSec)

        const result = moveTick(prev.res, tiles, prev.campfire, next.phase)
        return {
          elapsedSec,
          res: result.resource,
          campfire: result.campfire
        }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section>
      <TopBar />
      <SideBar onInfo={()=>setInfo(prev=>!prev)} infoOpen={info} />
        {info && (
          <InfoToggle wood={game.res.wood} gas={game.res.gas} fur={game.res.fur} minerals={game.res.minerals} rates={rates} pos={infoPos} setPos={setInfoPos}/>
        )}
      <button onClick={() => setGame(prev => ({
        ...prev, elapsedSec:prev.elapsedSec+50, res:{...prev.res, wood:0}}))}>
        Burner Button, Forward 50 seconds, sets wood to zero
      </button>
      <div>
        <p>Phase: {time.phase}</p>
        <p>Time remaining: {time.remaining} (seconds)</p>
      </div>
      <div>
        <p>Campfire: {game.campfire.lit ? 'Lit': 'Out'}</p>
        <p>GracePeriod: {game.campfire.grace}/30 seconds</p>
        <p>Fuel timer: {game.campfire.elapsed} seconds</p>
      </div>
      <section>
        <GameGrid tiles={getVisible(tiles)} isCampfireLit={game.campfire.lit} handleTile={(id)=> {
          const newTiles = unlock(tiles,id,game.res)
          if(newTiles){
            setTiles(newTiles.tiles)
            setGame(prev=>({...prev,res:newTiles.resources}))
          }
        }}/>
      </section>
    </section>
  )
}

export default App
