import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result1 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result1.jpg")';
        // const audio = document.querySelector('#result1Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result1'>
            <p className='resultText'>
                Haven't you seen the movies? The red button is always the self-destruct button. You are dead as the spaceship explodes.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result1Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result1