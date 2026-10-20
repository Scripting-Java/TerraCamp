import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'

import { useState } from 'react'
import './App.css'

function App() {
const [wood, setWood]=useState(10)
const [gas, setGas]=useState(10)
const [fur, setFur]=useState(10)
const [minerals, setMinerals]=useState(10)
const startingTiles = getStartingTiles()

  return (
    <section>
      <TopBar />
      <ResBar wood={wood} gas={gas} fur={fur} minerals={minerals}/>
      <button onClick={()=> setGas(gas+1)}>Collect Gas</button>
      <section className='campfire'>
      <GameGrid tiles={startingTiles}/>  
      </section>
    </section>
  )
}

export default App
