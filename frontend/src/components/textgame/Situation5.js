import React, { useState } from 'react';
import './textgameStyles.css';
import Result7 from './Result7';

const Situation5 = () => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation5.jpg")';
        // const audio = document.querySelector('#situation5Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '5_wear') {
            sessionStorage.setItem('situation5Done', true);
            sessionStorage.setItem('situation5Result', '5_wear');
            sessionStorage.setItem('suitTaken', true);
            setOpt1Selected(true);
        }
        else if (situation === '5_leave') {
            sessionStorage.setItem('situation5Done', true);
            sessionStorage.setItem('situation5Result', '5_leave');
            sessionStorage.setItem('suitTaken', false);
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || opt2Selected || sessionStorage.getItem('situation5Done')) {
        return <Result7 />;
    }
    return (
        <div className='situation situation5'>
            <p className='situationText situation5Text'>
                In the vault of alien artifacts and books, you also find a body-suit that can be used to disguise yourself as an alien. You also see a note that says the suit is not removable once worn.
            </p>
            <div className='options s5options'>
                <div className='row'>
                    <div className='optionButton s5optionButton' onClick={() => handleSituation('5_wear')}>
                        <p className='optionText'> Wear the suit </p>
                    </div>
                    <div className='optionButton s5optionButton' onClick={() => handleSituation('5_leave')}>
                        <p className='optionText'> Leave the suit </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation5Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation5