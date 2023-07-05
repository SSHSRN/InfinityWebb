import React, { useState } from 'react';
import './textgameStyles.css';
import Result26 from './Result26';

const Result25 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result25.jpg")';
    // const audio = document.querySelector('#result25Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result25Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result25Done')) {
        return <Result26 />;
    }

    return (
        <div className='result result25'>
            <p className='resultText result25Text'>
                You reject her proposal as you want to return to Earth, and you leave the place immediately.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result25Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result25