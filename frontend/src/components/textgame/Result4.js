import React, { useState } from 'react';
import './textgameStyles.css';
import Situation2 from './Situation2';
import axios from 'axios';

const Result4 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result4.png")';

    // const audio = document.querySelector('#result4Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result4Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result4Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result4Done')) {
        return <Situation2 />;
    }

    return (
        <div className='result result4'>
            <p className='resultText result4Text'>
                The spaceship's AI recognizes the dialogue as the emergency override command and immediately opens an exit for you.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result4Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result4