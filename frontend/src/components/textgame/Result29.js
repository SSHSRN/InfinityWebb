import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result29 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result29.jpg")';
        // const audio = document.querySelector('#result29Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result29'>
            <p className='resultText result29Text'>
                Boarding the repaired spaceship, you take off from the planet and head back to Earth. You are welcomed back in your home planet and you live happily ever after.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result29Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result29