import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result21 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result21.jpg")';
        // const audio = document.querySelector('#result21Audio');
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
        <div className='result result21'>
            <p className='resultText result21Text'>
                You press the button with the Flying Horse Symbol out of desperation. Surprisingly, the ship starts up and activates its autopilot system. The ship autonomously navigates through space and back to Earth, safely landing you back home, where you live happily ever after.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result21Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result21