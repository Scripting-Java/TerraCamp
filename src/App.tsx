import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'
import moveTick from './utils/gameTick'

import { useState, useEffect } from 'react'
import './App.css'

const startingTiles = getStartingTiles()
function App() {
  const [res, setRes] = useState({
    wood: 10, gas: 0, fur: 0, minerals: 0
  })
  const tiles = startingTiles
  useEffect(() => {
    const interval = setInterval(() => {
      setRes(prev => moveTick(prev, tiles))
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <section>
      <TopBar />
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
