// This will be shown if the player did not take the ring from the noble looking corpse in the earlier situation.

import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result17 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result17.jpg")';
        // const audio = document.querySelector('#result17Audio');
        // if (audio.paused) {
        //     audio.play();
        // }

        // clear sessionStorage
        sessionStorage.clear();
    }, []);

    return (
        <div className='result result17'>
            <p className='resultText result17Text'>
                The aliens capture you, erase your memories and use you as a servant in the palace. You spend the rest of your life serving the aliens.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result17Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result17