import React, { useEffect, useState } from 'react';
import Result5 from './Result5';
import Result6 from './Result6';
import './textgameStyles.css';

const Situation2 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation2.jpg")';
        // const audio = document.querySelector('#situation2Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '2_gun') {
            setOpt1Selected(true);
        }
        else if (situation === '2_cave') {
            setOpt2Selected(true);
        }
        // else if (situation === '2_mountain') {
        //     setOpt3Selected(true);
        // }
        // else if (situation === '2_outpost') {
        //     setOpt4Selected(true);
        // }
    }

    if (opt1Selected) {
        return <Result5 />;
    }
    else if (opt2Selected) {
        return <Result6 />;
    }
    return (
        <div className='situation situation2'>
            <p className='situationText situation2Text'>
                You have escaped the spaceship and are now on the planet. You just see around and have to decide which path to take.
            </p>
            <div className='options s2options'>
                <div className='row'>
                    <div className='optionButton s2optionButton' onClick={() => handleSituation('2_gun')}>
                        <img className='optionImage' src='./assets/situation2_option1.jpg' alt='A gun near an alien skeleton' />
                        <p className='optionText'> A gun near an alien skeleton </p>
                    </div>
                    <div className='optionButton s2optionButton' onClick={() => handleSituation('2_cave')}>
                        <img className='optionImage' src='./assets/situation2_option2.jpg' alt='A cave' />
                        <p className='optionText'> A cave </p>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='optionButton s2optionButton' onClick={() => handleSituation('2_mountain')}>
                        <img className='optionImage' src='./assets/situation2_option3.jpg' alt='A mountain' />
                        <p className='optionText'> A mountain </p>
                    </div>
                    <div className='optionButton s2optionButton' onClick={() => handleSituation('2_outpost')}>
                        <img className='optionImage' src='./assets/situation2_option4.jpg' alt='An abandoned alien outpost' />
                        <p className='optionText'> An abandoned alien outpost </p>
                    </div>
                </div> */}
            </div>
            {/* <audio id="situation2Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation2