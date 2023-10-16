import { Button } from '@mui/material';
import './App.css';
import LoadingBar from './YuklenmeBari';
import React, { useState, useEffect } from 'react';

let bar1LastValue = 0
let speed = 1
let bos = 1
function App() {


  const doMath = ((Multipication, lastValue) => {

    if (lastValue > 99) {
      return (0)

    }

    var value = lastValue + Multipication;
    if (value > 100) {
      value = 100
    }

    return value
  })


  const [saniye, setSaniye] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setSaniye((prevSaniye) => prevSaniye + 1)

    }, 1000);
    return () => {

      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("speed degisti")
  }, [bos])


  if (saniye === 100) { setSaniye(0); }
  bar1LastValue = doMath(speed, bar1LastValue)
  function increaseSpeed() {
    speed = speed + 1
    console.log(speed)
  }

  return (
    <div className="App">
      <LoadingBar value={bar1LastValue}></LoadingBar>
      <p>{speed}</p>
      <Button onClick={increaseSpeed}>2x</Button>
    </div>

  );
}

export default App;
