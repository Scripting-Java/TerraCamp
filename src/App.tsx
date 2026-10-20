import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'
import GameGrid from './components/GameGrid/GameGrid'
import getStartingTiles from './utils/getStartingTiles'
import getProduction from './utils/getProd'

import { useState, useEffect } from 'react'
import './App.css'

const startingTiles = getStartingTiles()
function App() {
  const [res, setRes] = useState({
    wood: 10, gas: 0, fur: 0, minerals: 0
  })
  useEffect(()=>{
    
  })

  return (
    <section>
      <TopBar />
      <ResBar
        wood={getProduction(startingTiles).wood+res.wood}
        gas={getProduction(startingTiles).gas+res.gas}
        fur={getProduction(startingTiles).fur+res.fur}
        minerals={getProduction(startingTiles).minerals+res.minerals} />
      <section>
        <GameGrid tiles={startingTiles} />
      </section>
    </section>
  )
}

export default App
