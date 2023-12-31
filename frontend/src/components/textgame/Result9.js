import React, { useState } from 'react';
import './textgameStyles.css';
import Situation2 from './Situation2';
import axios from 'axios';

const Result9 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result9.jpg")';
    // const audio = document.querySelector('#result9Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    sessionStorage.removeItem('situation2Done');

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result9Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result9Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result9Done')) {
        return <Situation2 />;
    }

    return (
        <div className='result result9'>
            <p className='resultText result9Text'>
                You pick some shiny and colourful gemstones and put them in your pocket and return back to the spaceship.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result9Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result9