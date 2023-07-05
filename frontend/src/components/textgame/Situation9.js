import React, { useState } from 'react';
import './textgameStyles.css';
import Result25 from './Result25';
import Result24 from './Result24';

const Situation9 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation9.jpg")';
    // const audio = document.querySelector('#situation9Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '9_accept') {
            sessionStorage.setItem('situation9Done', true);
            sessionStorage.setItem('situation9Result', '9_accept');
            setOpt1Selected(true);
        }
        else if (situation === '9_reject') {
            sessionStorage.setItem('situation9Done', true);
            sessionStorage.setItem('situation9Result', '9_reject');
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || ((sessionStorage.getItem('situation9Result') === '9_accept') && (sessionStorage.getItem('situation10Result') === '9_accept'))) {
        return <Result24 />;
    }
    else if (opt2Selected || ((sessionStorage.getItem('situation9Result') === '9_reject') && (sessionStorage.getItem('situation10Result') === '9_reject'))) {
        return <Result25 />;
    }
    return (
        <div className='situation situation9'>
            <p className='situationText situation9Text'>
                In a surprising twist, she expresses her affection and proposes a lifelong companionship.
            </p>
            <div className='options s9options'>
                <div className='row'>
                    <div className='optionButton s9optionButton' onClick={() => handleSituation('9_accept')}>
                        <p className='optionText'> Accept the proposal </p>
                    </div>
                    <div className='optionButton s9optionButton' onClick={() => handleSituation('9_reject')}>
                        <p className='optionText'> Reject the proposal </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation9Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation9