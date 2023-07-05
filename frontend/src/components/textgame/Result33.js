import React, { useState } from 'react';
import './textgameStyles.css';
import Result34 from './Result34';

const Result33 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result33.jpg")';
    // const audio = document.querySelector('#result33Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result33Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result33Done')) {
        return <Result34 />;
    }

    return (
        <div className='result result33'>
            <p className='resultText result33Text'>
                You are very happy that you are finally home,but you realize that your family may not be able to recognize this new appearance of yours. Hence, you go to your space research center and try to meet your senior scientist, but fearing your appearance, he tranquilizes you even before you can speak something.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result33Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result33