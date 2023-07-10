import React, { useState } from 'react';
import './textgameStyles.css';
import Result29 from './Result29';
import axios from 'axios';

const Result30 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result30.jpg")';
    // const audio = document.querySelector('#result30Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result30Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result30Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result30Done')) {
        return <Result29 />;
    }

    return (
        <div className='result result30'>
            <p className='resultText result30Text'>
                As you had taken a few gems from the treasure chest earlier, you use them to buy the spaceship parts you need. You buy the parts and repair your spaceship.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result30Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result30