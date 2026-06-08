import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, addCount] = useState(0)
  const increment= ()=> {
    if(count<10)
    addCount((count)=> count + 1)
  }
  const decrement= ()=> {
    if (count>-10)
      addCount((count)=>count - 1)
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Counter</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={increment}
        >
          Increment
        </button>
        <button type="button" className="counter"
         onClick={decrement}
         >
          decrement
         </button>
        <label>count is {count}</label>
      </section>
    </>
  )
}

export default App
