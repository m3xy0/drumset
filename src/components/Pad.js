

export default function Pad({ keyName, keySound, updateDisplay, keyText, Volume, Toggle }) {

   function playSound(e) {
    if(Toggle === true) {
        const theAudio = document.getElementById(keyName);
        theAudio.play();
        updateDisplay(keyText);
        console.log(Volume);
        theAudio.volume = Volume/100;
        }
    }

    return (
        <>
        <div id={keySound} className="drum-pad" onClick={playSound}><audio src={keySound} className="clip" id={keyName} data-text={keyText} ></audio>{keyName}</div>
        </>
    );
}   