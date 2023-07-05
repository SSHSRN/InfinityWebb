import React, { useState } from 'react';
import './textgameStyles.css';
import Situation2 from './Situation2';

const Result12 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/result12.jpg")';
    // const audio = document.querySelector('#result12Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    sessionStorage.removeItem('situation2Done');

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        sessionStorage.setItem('result12Done', true);
        setShowNext(true);
    };

    if (showNext || sessionStorage.getItem('result12Done')) {
        return <Situation2 />;
    }

    return (
        <div className='result result12'>
            <p className='resultText result12Text'>
                You return back to the portal and escape the collapsing realm, EMPTY HANDED.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="result12Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Result12