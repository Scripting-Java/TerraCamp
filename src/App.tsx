import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'
import moveTick from './utils/gameTick'
import { handleDayNight } from './utils/dayNightCycle'

import { useState, useEffect } from 'react'
import './App.css'

const startingTiles = getStartingTiles()
function App() {
  const [elapsedSec, setElapsedSec] = useState(0)
  const time = handleDayNight(elapsedSec)
  const [res, setRes] = useState({
    wood: 10, gas: 0, fur: 0, minerals: 0
  })
  const tiles = startingTiles
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSec(prev => prev+1)
      setRes(prev => moveTick(prev, tiles))
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <section>
      <TopBar />
      <div>
        <p>Phase: {time.phase}</p>
        <p>Time remaining: {time.remaining} (seconds)</p>
      </div>
      <ResBar
        wood={res.wood}
        gas={res.gas}
        fur={res.fur}
        minerals={res.minerals} />
      <section>
        <GameGrid tiles={startingTiles} />
      </section>
    </section>
  )
}

export default App
