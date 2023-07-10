import React, { useState } from 'react';
import './textgameStyles.css';
import Result29 from './Result29';
import axios from 'axios';

const Result31 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result31.jpg")';
    // const audio = document.querySelector('#result31Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result31Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result31Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result31Done')) {
        return <Result29 />;
    }

    return (
        <div className='result result31'>
            <p className='resultText result31Text'>
                As you do not have any money to buy the spaceship parts you need, you work at the store for a few days to earn money. After earning enough money, you use them to buy the spaceship parts you need. You buy the parts and repair your spaceship.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result31Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result31