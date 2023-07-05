import React, { useState } from 'react';
import './textgameStyles.css';
import Result28 from './Result28';
import Result30 from './Result30';
import Result31 from './Result31';

const Result27 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result27.jpg")';
    // const audio = document.querySelector('#result27Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result27Done', true);
        setShowNext(true);
    };

    if ((showNext || sessionStorage.getItem('result27Done')) && sessionStorage.getItem('ringTaken') && sessionStorage.getItem('ringTaken') === 'true') {
        return <Result28 />;
    }

    else if ((showNext || sessionStorage.getItem('result27Done')) && sessionStorage.getItem('gemsTaken') && sessionStorage.getItem('gemsTaken') === 'true') {
        return <Result30 />;
    }

    else if (showNext) {
        return <Result31 />;
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