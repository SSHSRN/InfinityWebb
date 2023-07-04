import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation7 from './Situation7';

const Result19 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result19.jpg")';
        // const audio = document.querySelector('#result19Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Situation7 />;
    }

    return (
        <div className='result result19'>
            <p className='resultText result19Text'>
                On exploring the space gallery when the aliens are not around, you find an advanced alien spaceship. You decide to use it to escape from the aliens.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result19Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result19