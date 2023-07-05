import React, { useState } from 'react';
import './textgameStyles.css';
import Result25 from './Result25';
import Result24 from './Result24';

const Situation11 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation11.jpg")';
    // const audio = document.querySelector('#situation11Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '11_family') {
            sessionStorage.setItem('situation11Done', true);
            sessionStorage.setItem('situation11Result', '11_family');
            setOpt1Selected(true);
        }
        else if (situation === '11_space_org') {
            sessionStorage.setItem('situation11Done', true);
            sessionStorage.setItem('situation11Result', '11_space_org');
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || (sessionStorage.getItem('situation11Result') && sessionStorage.getItem('situation11Result') === '11_family')) {
        return <Result24 />;
    }
    else if (opt2Selected || (sessionStorage.getItem('situation11Result') && sessionStorage.getItem('situation11Result') === '11_space_org')) {
        return <Result25 />;
    }
    return (
        <div className='situation situation11'>
            <p className='situationText situation11Text'>
                You have reached earth, but you are still in the alien suit and you find it impossible to take it off. You are now stuck in the alien suit and you have to decide what to do next.
            </p>
            <div className='options s11options'>
                <div className='row'>
                    <div className='optionButton s11optionButton' onClick={() => handleSituation('11_family')}>
                        <p className='optionText'> Go to your family </p>
                    </div>
                    <div className='optionButton s11optionButton' onClick={() => handleSituation('11_space_org')}>
                        <p className='optionText'> Go to your space organization </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation11Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation11