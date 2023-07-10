import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result34 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result34.jpg")';
        // const audio = document.querySelector('#result34Audio');
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
        <div className='result result34'>
            <p className='resultText result34Text'>
                When you regain consciousness, you find yourself in the isolated research ward of the space research center. Soon, a few scientists arrive, tranquilize you and start experimenting on you as they perceive you as an alien. You are unable to do anything as you are anasthetized. You die in the process.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result34Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result34