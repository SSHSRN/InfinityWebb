// This page is will be shown when the user chooses to wear the alien body suit

import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation8 from './Situation8';

const Result22 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result22.jpg")';
        // const audio = document.querySelector('#result22Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Situation8 />;
    }

    return (
        <div className='result result22'>
            <p className='resultText result22Text'>
                As you are wearing the body suit, the aliens do not recognize you as a human. You are able to walk through the city without any trouble. You are amazed to see the alien civilization and the suit's translation feature helps you communicate with the aliens.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result22Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result22