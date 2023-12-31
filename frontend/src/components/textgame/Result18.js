import React, { useState } from 'react';
import './textgameStyles.css';
import Result19 from './Result19';
import axios from 'axios';

const Result18 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result18.jpg")';
    // const audio = document.querySelector('#result18Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result18Done', true);
        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                data: {
                    email: sessionStorage.getItem('email'),
                    gameStatus: {
                        result18Done: true
                    }
                }
            });
        }
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result18Done')) {
        return <Result19 />;
    }

    return (
        <div className='result result18'>
            <p className='resultText result18Text'>
                When the aliens arrive at the spot where the noise originated, you cleverly pretend to be a statue that has fallen. The aliens conclude that the noise resulted from the statue's fall and proceed to transport you to their space gallery. They perceive you as a prized display and prominently showcase you, completely unaware that you are a living being.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result18Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result18