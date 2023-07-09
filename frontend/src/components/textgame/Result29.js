import React, { useState } from 'react';
import './textgameStyles.css';
import Situation10 from './Situation10';
import axios from 'axios';

const Result29 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result29.jpg")';
    // const audio = document.querySelector('#result29Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result29Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result29Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result29Done')) {
        return <Situation10 />;
    }

    return (
        <div className='result result29'>
            <p className='resultText result29Text'>
                Boarding the repaired spaceship, you take off from the planet and head back to Earth.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result29Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result29