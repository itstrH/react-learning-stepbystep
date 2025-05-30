import { useState } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('Hello User')

  function updateGreeting() {
    const currentHour = new Date().getHours();
    if(currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning User')
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon User')
    }
    else setGreeting('Goodnight User')
  }

  return (
    <>
      <p>{greeting}</p>
      <button onClick={() => updateGreeting()}>Update Greeting</button>
    </>
  )
}

export default App
