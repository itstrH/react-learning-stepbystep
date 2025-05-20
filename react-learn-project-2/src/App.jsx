import { useState, useEffect } from 'react';
import './App.css';
import demoPic from "../src/assets/img/rating.png";


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

const name = "Huy"
const isLoggedIn = true;
let person = {
  name: "John",
  age: 38,
}

function DynamicValue() {
  return (
    <>
      <h2>Chào {name}</h2>
      <p>{isLoggedIn ? "Bạn đã đăng nhập" : "Đăng nhập đê"}</p>
      <p>Name: {person.name}, Age: {person.age}</p>
      <img src={demoPic} alt="" />
    </>
  )
}




function App() {
  return (
    <>
      <Header />
      <DynamicValue />
    </>
  );
}

export default App;