import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'

import { useState } from 'react'
import './App.css'

const startingTiles = getStartingTiles()
function App() {
  const [wood, setWood] = useState(10)
  const [gas, setGas] = useState(0)
  const [fur, setFur] = useState(0)
  const [minerals, setMinerals] = useState(0)


  return (
    <section>
      <TopBar />
      <ResBar wood={wood} gas={gas} fur={fur} minerals={minerals} />
      <section className='campfire'>
        <GameGrid tiles={startingTiles} />
      </section>
    </section>
  )
}

export default App
