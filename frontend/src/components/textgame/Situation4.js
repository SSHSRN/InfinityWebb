import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Situation5 from './Situation5';

const Situation4 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation4.jpg")';
        // const audio = document.querySelector('#situation4Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '4_take') {
            setOpt1Selected(true);
        }
        else if (situation === '4_leave') {
            setOpt2Selected(true);
        }
    }

    if (opt1Selected) {
        return <Situation5 />;
    }
    else if (opt2Selected) {
        return <Situation5 />;
    }
    return (
        <div className='situation situation4'>
            <p className='situationText situation4Text'>
                You also find a device that can be used to communicate with the aliens.
            </p>
            <div className='options s4options'>
                <div className='row'>
                    <div className='optionButton s4optionButton' onClick={() => handleSituation('4_take')}>
                        <p className='optionText'> Take the device </p>
                    </div>
                    <div className='optionButton s4optionButton' onClick={() => handleSituation('4_leave')}>
                        <p className='optionText'> Leave the device </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation4Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation4