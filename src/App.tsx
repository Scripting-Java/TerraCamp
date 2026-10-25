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
import { starting } from './utils/shop/upgrades'
import type { upgradeLevels } from './utils/shop/upgrades'
import ShopToggle from './components/ShopToggle/shop'
import { buyUpgrade } from './utils/shop/upgrades'
import type { upgradeType } from './utils/shop/upgrades'

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
  const [shop,setShop]=useState(false)
  const time = handleDayNight(game.elapsedSec)
  const [tiles, setTiles] = useState<Tile[]>(()=>build())
  const [levels,setLevels] = useState<upgradeLevels>(starting)
  const prod = getProduction(tiles, levels)
  const rates = {
    woodGain: prod.wood/60,
    woodUse: game.campfire.lit?(time.phase==='day' ? 1/120: 1/30):0,
    gasGain: prod.gas/60,
    furGain: prod.fur/60,
    mineralsGain: prod.minerals/60
  }
  const [infoPos, setInfoPos] = useState({x:100,y:200})
  const [shopPos, setShopPos] = useState({x:100,y:100})

  function handleUpgrade(type: upgradeType){
    const result = buyUpgrade(type,levels,game.res.gas)
    if(!result) return
    setLevels(result.levels)
    setGame(prev=>({...prev,res:{...prev.res,gas:result.gas}}))
  }

  useEffect(() => {
    const interval = setInterval(() => {setGame(prev => {
        const elapsedSec = prev.elapsedSec + 1
        const next = handleDayNight(elapsedSec)
        const result = moveTick(prev.res, tiles, prev.campfire, next.phase, levels)
        return {elapsedSec,res: result.resource,campfire: result.campfire}
      })}, 1000)
      return () => clearInterval(interval)
  }, [tiles, levels])
  return (
    <section>
      <TopBar />
      <SideBar onInfo={()=>setInfo(prev=>!prev)} infoOpen={info} onShop={()=>setShop(prev=>!prev)} shopOpen={shop}/>
        {info && (<InfoToggle wood={game.res.wood} gas={game.res.gas} fur={game.res.fur} minerals={game.res.minerals} rates={rates} pos={infoPos} setPos={setInfoPos}/>)}
        {shop && <ShopToggle levels={levels} gas={game.res.gas} buy={handleUpgrade} pos={shopPos} setPos={setShopPos}/>}
      <button onClick={()=>setGame(prev=>({...prev, campfire: {...prev.campfire,lit:false,elapsed:0,grace:0}}))}>
        Burner Button 2(test unlocks)
      </button>
      <button onClick={()=>setGame(prev=>({...prev,res:{wood:100000,gas:100000,fur:1000000,minerals:100000}}))}>
        Inf Resources
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
        <GameGrid tiles={getVisible(tiles)} currentRes={game.res} isCampfireLit={game.campfire.lit} handleTile={(id)=> {
          if(!game.campfire.lit)
            return
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
