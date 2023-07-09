// This will be displayed if the player refuses to wear the alien body-suit.

import React, { useState } from 'react';
import './textgameStyles.css';
import Situation6 from './Situation6';
import axios from 'axios';

const Result8 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result8.jpg")';
    // const audio = document.querySelector('#result8Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result8Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result8Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result8Done')) {
        return <Situation6 />;
    }

    return (
        <div className='result result8'>
            <p className='resultText result8Text'>
                Just as you thought you were being stealthy, you step on a twig and this makes a cracking sound breaking the silence of the surroundings.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result8Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result8