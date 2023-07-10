import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result16 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result16.jpg")';
        // const audio = document.querySelector('#result16Audio');
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

        // take a backup of the sessionStorage email
        const email = sessionStorage.getItem('email');
        // Clear the sessionStorage
        sessionStorage.clear();
        // Restore the email
        sessionStorage.setItem('email', email);
    }, []);

    return (
        <div className='result result16'>
            <p className='resultText result16Text'>
                You really think that you can take on an army of elite aliens? You are immediately killed by the aliens.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result16Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result16