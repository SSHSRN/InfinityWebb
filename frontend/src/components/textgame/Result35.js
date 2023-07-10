import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result35 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result35.jpg")';
        // const audio = document.querySelector('#result35Audio');
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
        <div className='result result35'>
            <p className='resultText result35Text'>
                You are very happy that you are finally home,but you realize that your family may not be able to recognize this new appearance of yours. Hence, you hide outside your space research center and try to meet your fellow scientists, who recognize you by your actions. As they too find it difficult to remove the alien suit, they transfer your consciousness to a new human body, which happens to be a clone of yours as they had your DNA samples. You finally return back home and live happily ever after.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result35Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result35