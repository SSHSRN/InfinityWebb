import React, { useState } from 'react';
import './textgameStyles.css';
import Result34 from './Result34';
import axios from 'axios';

const Result32 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result32.jpg")';
    // const audio = document.querySelector('#result32Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result32Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result32Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result32Done')) {
        return <Result34 />;
    }

    return (
        <div className='result result32'>
            <p className='resultText result32Text'>
                You are very happy that you are finally home,but joy soon turns to despair as your family do not recognize you and scream in fear at your hideous appearance. Although you try to explain, your altered voice only causes more panic. The military arrive at the house and shoot you with tranquilizers.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result32Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result32