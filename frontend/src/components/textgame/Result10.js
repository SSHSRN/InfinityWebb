import React, { useState } from 'react';
import './textgameStyles.css';
import Situation2 from './Situation2';

const Result10 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result10.jpg")';
    // const audio = document.querySelector('#result10Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    sessionStorage.removeItem('situation2Done');

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result10Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result10Done')) {
        return <Situation2 />;
    }

    return (
        <div className='result result10'>
            <p className='resultText result10Text'>
                You pick the ring from the noble-looking corpse, wear it and return back.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result10Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result10