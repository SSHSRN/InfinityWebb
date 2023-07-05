import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Result29 from './Result29';

const Result31 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result31.jpg")';
        // const audio = document.querySelector('#result31Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Result29 />;
    }

    return (
        <div className='result result31'>
            <p className='resultText result31Text'>
                As you do not have any money to buy the spaceship parts you need, you work at the store for a few days to earn money. After earning enough money, you use them to buy the spaceship parts you need. You buy the parts and repair your spaceship.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result31Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result31