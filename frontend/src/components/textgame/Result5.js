import React, { useState } from 'react';
import './textgameStyles.css';
import Situation3 from './Situation3';
import axios from 'axios';

const Result5 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result5.jpg")';
    // const audio = document.querySelector('#result5Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result5Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result5Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result5Done')) {
        return <Situation3 />;
    }

    return (
        <div className='result result5'>
            <p className='resultText result5Text'>
                On firing the gun, you find that it is a teleportation gun. The shot creates a portal that sucks you in and you are transported to a realm where you find that you are surrounded by treasure chests. You also find few corpses and skeletons which indicates signs of a fight.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result5Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result5