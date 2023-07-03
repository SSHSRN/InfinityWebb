// This will be shown if the player did not take the ring from the noble looking corpse in the earlier situation.

import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result16 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result16.jpg")';
        // const audio = document.querySelector('#result16Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result16'>
            <p className='resultText result16Text'>
                You really think that you can take on an army of elite aliens? You are immediately killed by the aliens.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result16Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result16