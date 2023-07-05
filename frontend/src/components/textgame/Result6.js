import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation5 from './Situation5';

const Result6 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result6.jpg")';
        // const audio = document.querySelector('#result6Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Situation5 />;
    }

    return (
        <div className='result result6'>
            <p className='resultText result6Text'>
                You enter the cave that is too dark. On venturing further, you stumble upon an underground alien library filled with books containing the history of the planet and the aliens. You also find that the aliens communicate using thoughts that are transmitted using devices that have a transmitter and a receiver.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result6Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result6