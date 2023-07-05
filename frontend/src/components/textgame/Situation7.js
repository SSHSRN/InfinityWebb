import React, { useState } from 'react';
import './textgameStyles.css';
import Result20 from './Result20';
import Result21 from './Result21';

const Situation7 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation7.jpg")';
    // const audio = document.querySelector('#situation7Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '7_alien_text') {
            sessionStorage.setItem('situation7Done', true);
            sessionStorage.setItem('situation7Result', '7_alien_text');
            setOpt1Selected(true);
        }
        else if (situation === '7_flying_horse') {
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || (sessionStorage.getItem('situation7Done') && sessionStorage.getItem('situation7Result') === '7_alien_text')) {
        return <Result20 />;
    }
    else if (opt2Selected || (sessionStorage.getItem('situation7Done') && sessionStorage.getItem('situation7Result') === '7_flying_horse')) {
        return <Result21 />;
    }
    return (
        <div className='situation situation7'>
            <p className='situationText situation7Text'>
                Stealthily, you get into the spaceship and then, you notice that you do not understand the ship's controls. Instead of the mechanical controls that you are used to, you just find 2 buttons with alien symbols on them. In the touch screen, you set the destination as Earth by entering Earth's geospatial coordinates. Now, you must choose one of the buttons to start the spaceship and escape the aliens.
            </p>
            <div className='options s7options'>
                <div className='row'>
                    <div className='optionButton s7optionButton' onClick={() => handleSituation('7_alien_text')}>
                        <p className='optionText'> Press the button with Alien Text </p>
                    </div>
                    <div className='optionButton s7optionButton' onClick={() => handleSituation('7_flying_horse')}>
                        <p className='optionText'> Press the button with a Flying horse </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation7Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation7