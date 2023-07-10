// This will be shown if the player did not take the ring from the noble looking corpse in the earlier situation.

import React, { useEffect } from 'react';
import './textgameStyles.css';
import axios from 'axios';

const Result15 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result15.jpg")';
        // const audio = document.querySelector('#result15Audio');
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
        <div className='result result15'>
            <p className='resultText result15Text'>
                You are captured by the aliens, who are amazed by your agility and fighting abilities. In order to harness your skills, the aliens erase your memories and groom you to become a soldier in their formidable army. From this point on, you pledge your allegiance to the alien cause and begin a journey of ascending through the ranks of their military.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result15Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result15