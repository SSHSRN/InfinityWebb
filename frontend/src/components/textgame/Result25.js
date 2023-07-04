import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result25 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result25.jpg")';
        // const audio = document.querySelector('#result25Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result25'>
            <p className='resultText result25Text'>
                You reject her proposal as you want to return to Earth, and you leave the place immediately.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result25Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result25