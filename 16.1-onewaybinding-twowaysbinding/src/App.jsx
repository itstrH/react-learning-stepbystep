import { useState } from 'react'
import './App.css'

function App() {
  // khai bao state de luu gia tri input
  const[playerName, setPlayerName] = useState("Player 1");
  // ham xu ly khi nguoi dung nhap lieu
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }
  return (
    <>  
      <h2>Nhap ten Player</h2>
      <input type="text" value={playerName} onChange={handleChange} />
      <p>Ten ban da nhap: {playerName}</p>
    </>
  )
}

export default App
