import React, { useState } from 'react';
import './textgameStyles.css';
import Result8 from './Result8';
import Result22 from './Result22';
import axios from 'axios';

const Result7 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result7.jpg")';
    // const audio = document.querySelector('#result7Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result7Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result7Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result7Done')) {
        console.log(sessionStorage.getItem('suitTaken'));
        if (sessionStorage.getItem('suitTaken') && sessionStorage.getItem('suitTaken') === 'true') {
            return <Result22 />;
        }
        else {
            console.log('result8');
            return <Result8 />;
        }   
    }

    return (
        <div className='result result7'>
            <p className='resultText result7Text'>
                You keep walking through the cave and finally reach the end of the cave, where you are surprised to find a huge alien civilization. You find that the city is filled with humanoid aliens.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result7Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result7