import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Result28 from './Result28';

const Result27 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result27.jpg")';
        // const audio = document.querySelector('#result27Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Result28 />;
    }

    return (
        <div className='result result27'>
            <p className='resultText result27Text'>
                In the market, you find a shop that sells artifacts and spare spaceship parts. You also observe that you can buy the parts you need to repair your spaceship from the shop.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result27Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result27