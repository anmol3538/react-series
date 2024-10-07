import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setcounter] = useState(1)
    //     variable, method
    //let counter  = 15 
    const addvalue = () => {
      counter= counter + 1
      if(counter > 20) counter = 20
      setcounter(counter)
    }
    const removevalue = () => {
      if(counter < 1 ) counter = 0
      else counter = counter - 1
      setcounter(counter)
    }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value</button>

    </>
  )
}

export default App
