import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result36 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation10.jpg")';
        // const audio = document.querySelector('#result36Audio');
        // if (audio.paused) {
        //     audio.play();
        // }

        // clear sessionStorage
        sessionStorage.clear();
    }, []);

    return (
        <div className='result result36'>
            <p className='resultText result36Text'>
                Worried that you might not be accepted by your family at earth due to your alien appearance, you decide to spend the rest of your life in your spaceship, exploring the universe.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result36Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result36