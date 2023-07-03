import React, { useEffect, useState } from 'react';
import './textgameStyles.css';
import Result7 from './Result7';

const Situation6 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation6.jpg")';
        // const audio = document.querySelector('#situation6Audio');
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
        if (situation === '6_act') {
            setOpt1Selected(true);
        }
        else if (situation === '6_run') {
            setOpt2Selected(true);
        }
        else if (situation === '6_fight') {
            setOpt3Selected(true);
        }
        else if (situation === '6_surrender') {
            setOpt4Selected(true);
        }
    }

    if (opt1Selected) {
        return <Result7 />;
    }
    else if (opt2Selected) {
        return <Result7 />;
    }
    else if (opt3Selected) {
        return <Result7 />;
    }
    else if (opt4Selected) {
        return <Result7 />;
    }
    return (
        <div className='situation situation6'>
            <p className='situationText situation6Text'>
                The aliens with weapons are approaching you. They still haven't seen you and are approaching to investigate the noise you made.
            </p>
            <div className='options s6options'>
                <div className='row'>
                    <div className='optionButton s6optionButton' onClick={() => handleSituation('6_act')}>
                        <p className='optionText'> Act like a statue </p>
                    </div>
                    <div className='optionButton s6optionButton' onClick={() => handleSituation('6_run')}>
                        <p className='optionText'> Run away </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='optionButton s6optionButton' onClick={() => handleSituation('6_fight')}>
                        <p className='optionText'> Fight the aliens </p>
                    </div>
                    <div className='optionButton s6optionButton' onClick={() => handleSituation('6_surrender')}>
                        <p className='optionText'> Surrender </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation6Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation6