import React from 'react';
import './App.css';
import Pad from './components/Pad.js';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [volume, setVolume] = useState(50);
  const [toggle, setToggle] = useState(true)

  function updateDisplay (a) {
    setText(a);
  }
  
  function volumeHandler (e) {
    setVolume(e.target.value);
  }

  React.useEffect(() => {
    function handleKeyPress(e) {
      
      const keyPressed = e.key.toUpperCase();
      const theAudio = document.getElementById(keyPressed);
  
      if(toggle === true && theAudio !== null) {
        const theText = theAudio.dataset.text;
        theAudio.volume = volume/100;
        console.log(theAudio.volume);
        theAudio.play();
        updateDisplay(theText);
      }
  }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [volume, toggle]);

  function onOff () {
    setToggle(!toggle);
    const button = document.querySelector("#toggleButton");
    if(toggle === true){
      button.style.float = "left";
    } else {
      button.style.float = "right";
    }
  }

  return (
    <div id="drum-machine">
      <div id="pads-container">
        <Pad keyName="Q" keyText="Hat 1" keySound="./Cev_H2.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="W" keyText="Hat 2" keySound="./Dsc_Oh.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="E" keyText="Heater 1" keySound="./Heater-1.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="A" keyText="Heater 2" keySound="./Heater-2.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="S" keyText="Heater 3" keySound="./Heater-3.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="D" keyText="Heater 4" keySound="./Heater-4_1.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="Z" keyText="Heater 5" keySound="./Heater-6.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="X" keyText="Kick 1" keySound="./Kick_n_Hat.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
        <Pad keyName="C" keyText="Kick 2" keySound="./RP4_KICK_1.mp3" updateDisplay={updateDisplay} Volume={volume} Toggle={toggle}/>
      </div>
      <div id="controls-container">
        <div id="powerDiv">
          <p id="power">Power</p>
          <div id="toggleButtonDiv" onClick={onOff}>
            <div id="toggleButton"></div>
          </div>
        </div>
        <div id="display">
        {text}
        </div>
        <div>
          <input type="range" min="0" max="100" value={volume} onChange={volumeHandler} id="slider"/>
        </div>
      </div> 
    </div>
  );
}

export default App;
