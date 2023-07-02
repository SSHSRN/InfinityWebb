import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result3 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result3.jpg")';
        // const audio = document.querySelector('#result3Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result3'>
            <p className='resultText result3Text'>
                Do you really think disabling alarms will stop the spaceship from exploding? You are dead as the spaceship explodes because of the gas leak.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result3Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result3