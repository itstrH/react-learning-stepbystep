import { useState, useEffect } from 'react';
import './App.css';


let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "Hello World 1!",
  "Hello World 2!",
  "Hello World 3!",
];

function ranDomTitle() {
  return Math.floor(Math.random() * wellCome .length); 
}

function Header() {
  const title = wellCome[ranDomTitle()];

  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là:{" "}
        <strong>{today}</strong>.
        Thời gian hiện tại{" "}
        <strong>{time}</strong>
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;