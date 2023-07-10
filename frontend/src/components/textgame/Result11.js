import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result11 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result11.jpg")';
        // const audio = document.querySelector('#result11Audio');
        // if (audio.paused) {
        //     audio.play();
        // }

        if (navigator.onLine) {
            axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/gameOver', {
                data: {
                    email: sessionStorage.getItem('email'),
                }
            });
        }

        // clear sessionStorage
        sessionStorage.clear();
    }, []);

    return (
        <div className='result result11'>
            <p className='resultText result11Text'>
                Drinking the potion makes you very powerful and morphs you into a very powerful being. Out of greed, you decide to take as much gold as you can carry, but the realm collapses and you die.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result11Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result11