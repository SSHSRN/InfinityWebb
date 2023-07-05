import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result20 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result20.jpg")';
        // const audio = document.querySelector('#result20Audio');
        // if (audio.paused) {
        //     audio.play();
        // }

        // clear sessionStorage
        sessionStorage.clear();
    }, []);

    return (
        <div className='result result20'>
            <p className='resultText result20Text'>
                You press the button with the Ancient Alien Text thinking it might activate the ship's flight systems. However, the ship fully locks down and launches into the space. Although the ship has oxygen and food supplies enough for your lifetime, you die of loneliness and depression.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result20Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result20