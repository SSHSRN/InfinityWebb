import React, { useState } from 'react';
import './textgameStyles.css';
import Result27 from './Result27';

const Result26 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result26.jpg")';
    // const audio = document.querySelector('#result26Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result26Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result26Done')) {
        return <Result27 />;
    }

    return (
        <div className='result result26'>
            <p className='resultText result26Text'>
                As you stroll further, you arrive at a futuristic market bustling with extraterrestrial merchandise and gadgets. The marketplace is filled with numerous shops, and you take the opportunity to browse through the storefronts.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result26Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result26