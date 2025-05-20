import { useState, useEffect } from 'react';
import './App.css';

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []); 


  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <h2>Welcome to React World!</h2>
      <p>
        Hôm nay là{" "}
        <strong>{formatDate(currentDateTime)}</strong>.
        Thời gian hiện tại{" "}
        <strong>{formatTime(currentDateTime)}</strong>
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>React Hello World!</h1>
      <p>Lorem, ipsum dolor sit</p>

      <Header />
    </>
  );
}

export default App;