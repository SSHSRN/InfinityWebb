import React, { useState } from 'react';
import './textgameStyles.css';
import Result28 from './Result28';
import Result30 from './Result30';
import Result31 from './Result31';
import axios from 'axios';

const Result27 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result27.jpg")';
    // const audio = document.querySelector('#result27Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result27Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result27Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result27Done')) {
        if (sessionStorage.getItem('ringTaken') && sessionStorage.getItem('ringTaken') === 'true') {
            return <Result28 />;
        }
        else if (sessionStorage.getItem('gemsTaken') && sessionStorage.getItem('gemsTaken') === 'true') {
            return <Result30 />;
        }
        else {
            return <Result31 />;
        }
    }

    return (
        <div className='result result27'>
            <p className='resultText result27Text'>
                In the market, you find a shop that sells artifacts and spare spaceship parts. You also observe that you can buy the parts you need to repair your spaceship from the shop.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result27Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result27