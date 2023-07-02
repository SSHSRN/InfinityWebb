import React, { useEffect } from 'react';
import './textgameStyles.css';

const Result2 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result2.jpg")';
        // const audio = document.querySelector('#result2Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    return (
        <div className='result result2'>
            <p className='resultText'>
                Are you Rajinikanth, that you can light a cigar with style anywhere? You are dead as there was a gas leak and the cigar caused an explosion.
            </p>
            <button className='homeButton' onClick={() => window.location.reload()}> Play Again </button>
            {/* <audio id="result2Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result2