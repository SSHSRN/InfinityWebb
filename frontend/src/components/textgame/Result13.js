import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation2 from './Situation2';

const Result13 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result13.jpg")';
        // const audio = document.querySelector('#result13Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Situation2 />;
    }

    return (
        <div className='result result13'>
            <p className='resultText result13Text'>
                You really thought you could outrun an army or aliens and escape? You are caught by the aliens.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result13Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result13