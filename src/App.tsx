import TopBar from './components/TopBar/TopBar'
import ResBar from './components/ResBar/ResBar'

import './App.css'

function App() {


  return (
    <section>
      <TopBar />
      <ResBar wood={10} gas={10} fur={10} minerals={10}/>
      <section className='campfire'>
        {Array.from({ length: 9 }, (_, index) => {
          let tileContent = ''
          if (index === 4) {
            tileContent = 'Fire Goes Here'
          } else {
            tileContent = 'Nature goes here'
          }
          return (
            <div className="tile" key={index}>
              {tileContent}
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default App
