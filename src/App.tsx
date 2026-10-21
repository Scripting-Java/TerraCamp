import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'
import moveTick from './utils/gameTick'
import type { campfireStatus } from './utils/campFire/campfire'
import { handleDayNight } from './utils/Phase/dayNightCycle'

import { useState, useEffect } from 'react'
import './App.css'

const startingTiles = getStartingTiles()
interface game{
  res:{wood:number, gas:number,fur:number,minerals:number}
  campfire:campfireStatus
}
function App() {
  const [elapsedSec, setElapsedSec] = useState(0)
  const time = handleDayNight(elapsedSec)
  const[game,setGame]= useState<game>({
    res:{wood:10,gas:0,fur:0,minerals:0},
    campfire:{lit:true,elapsed:0,grace:0,tier:'small',style:'default'} 
  })
  const tiles = startingTiles
useEffect(()=>{
  const interval = setInterval(()=>{
    setElapsedSec(prev=>{
      const next = prev+1
      return next
    })
    setGame(prev=>{
      const next = handleDayNight(elapsedSec+1)
      const result = moveTick(prev.res,tiles,prev.campfire,next.phase)
      return{
        res:result.resource,
        campfire: result.campfire
      }
    })
  }, 1000)
  return ()=> clearInterval(interval)
}, [])
  return (
    <section>
      <TopBar />
      <div>
        <p>Phase: {time.phase}</p>
        <p>Time remaining: {time.remaining} (seconds)</p>
      </div>
      <ResBar
        wood={game.res.wood}
        gas={game.res.gas}
        fur={game.res.fur}
        minerals={game.res.minerals} />
      <section>
        <GameGrid tiles={startingTiles} />
      </section>
    </section>
  )
}

export default App
