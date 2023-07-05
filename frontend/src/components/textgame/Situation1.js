import React, { useEffect, useState } from 'react';
import Result1 from './Result1';
import Result2 from './Result2';
import Result3 from './Result3';
import Result4 from './Result4';
import './textgameStyles.css';

const Situation1 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation1.jpg")';
        // const audio = document.querySelector('#situation1Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);
    const [opt3Selected, setOpt3Selected] = useState(false);
    const [opt4Selected, setOpt4Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '1_small_red_button') {
            setOpt1Selected(true);
        }
        else if (situation === '1_cigar') {
            setOpt2Selected(true);
        }
        else if (situation === '1_disable_alarms') {
            setOpt3Selected(true);
        }
        else if (situation === '1_recite_dialogue') {
            setOpt4Selected(true);
        }
        else {
            console.log('Invalid situation');
        }
    }

    if (opt1Selected) {
        return <Result1 />;
    }
    else if (opt2Selected) {
        return <Result2 />;
    }
    else if (opt3Selected) {
        return <Result3 />;
    }
    else if (opt4Selected) {
        console.log('opt4Selected');
        return <Result4 />;
    }
    return (
        <div className='situation situation1'>
            <p className='situationText'>
                Your spaceship has crashed and you are struck inside it. The alarms are blaring and you are unsure what works and what doesn't. What do you do?
            </p>
            <div className='options'>
                <div className='row'>
                    <button className='optionButton' onClick={() => handleSituation('1_small_red_button')}> Use the small red button </button>
                    <button className='optionButton' onClick={() => handleSituation('1_cigar')}> Light a cigar </button>
                </div>
                <div className='row'>
                    <button className='optionButton' onClick={() => handleSituation('1_disable_alarms')}> Disable the alarms </button>
                    <button className='optionButton' onClick={() => handleSituation('1_recite_dialogue')}> Recite actor Rajinikanth's dialogue: "Naan oru thadava sonna, nooru thadava sonna maadiri"
                    </button>
                </div>
            </div>
            {/* <audio id="situation1Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation1