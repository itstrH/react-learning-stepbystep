import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Book from './Book'
import './App.css'

const myBooks = ["Living Skill", "Coding with me", "Nice book"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>List of Books</h1>
      <ul>
        {myBooks.map((book, index) => (
          <Book key = {index} title = {book}/>
        ))}
      </ul>
    </>
  )
}

export default App
