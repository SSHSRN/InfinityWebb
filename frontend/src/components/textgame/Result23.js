import React, { useState } from 'react';
import './textgameStyles.css';
import Situation9 from './Situation9';

const Result23 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result23.jpg")';
    // const audio = document.querySelector('#result23Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result23Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result23Done')) {
        return <Situation9 />;
    }

    return (
        <div className='result result23'>
            <p className='resultText result23Text'>
                In a valiant battle, you overpower the alien, saving the damsel in distress. Filled with gratitude, she invites you to her residence, hailing your courage as the first to confront the rogue extraterrestrial.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result23Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result23