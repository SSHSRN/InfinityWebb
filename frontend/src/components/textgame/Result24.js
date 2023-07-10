import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result24 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result24.jpg")';
        // const audio = document.querySelector('#result24Audio');
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
        <div className='result result24'>
            <p className='resultText result24Text'>
                You accept her proposal with joy in your heart. Finally, after all your travels among the stars, you have found love in the unlikeliest of places. You build a life together in the alien city, finding wonder and adventure around every corner as you explore this strange new world side by side. Though your journey began among the stars, you have found your greatest treasure here - a loving family in an alien city you now call home.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result24Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result24