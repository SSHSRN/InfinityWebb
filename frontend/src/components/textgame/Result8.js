// This will be displayed if the player refuses to wear the alien body-suit.

import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation4 from './Situation4';

const Result8 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result8.jpg")';
        // const audio = document.querySelector('#result8Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Situation4 />;
    }

    return (
        <div className='result result8'>
            <p className='resultText result8Text'>
                Just as you thought you were being stealthy, you step on a twig and this attracts the attention of the aliens nearby.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result8Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result8