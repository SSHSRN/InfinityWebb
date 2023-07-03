// This will be shown if the player has taken the ring from the noble looking corpse in the earlier situation.

import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result14 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result14.jpg")';
        // const audio = document.querySelector('#result14Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result14'>
            <p className='resultText result14Text'>
                On finding their long-missing emperor's ring with you, the aliens think that you have something to do with the emperor's disappearance. You are kept in captivity and you starve to death.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result14Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result14