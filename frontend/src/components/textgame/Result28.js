import React, { useState } from 'react';
import './textgameStyles.css';
import Result29 from './Result29';

const Result28 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result28.jpg")';
    // const audio = document.querySelector('#result28Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result28Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result28Done')) {
        return <Result29 />;
    }

    return (
        <div className='result result28'>
            <p className='resultText result28Text'>
                On seeing the ring with the royal insignia in your hands, the shopkeeper immediately bows down to you and offers you the spaceship parts you need for free. You buy the parts and repair your spaceship.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result28Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result28