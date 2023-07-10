import React, { useState } from 'react';
import './textgameStyles.css';
import Result23 from './Result23';
import Result26 from './Result26';
import axios from 'axios';

const Situation8 = () => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation8.jpg")';
        // const audio = document.querySelector('#situation8Audio');
        // if (audio.paused) {
        //     audio.play();
        // }

    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '8_fight') {
            sessionStorage.setItem('situation8Done', true);
            sessionStorage.setItem('situation8Result', '8_fight');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation8Done: true,
                            situation8Result: '8_fight'
                        }
                    }
                });
            }
            setOpt1Selected(true);
        }
        else if (situation === '8_ignore') {
            sessionStorage.setItem('situation8Done', true);
            sessionStorage.setItem('situation8Result', '8_ignore');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation8Done: true,
                            situation8Result: '8_ignore'
                        }
                    }
                });
            }
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || (sessionStorage.getItem('situation8Result') === '8_fight')) {
        return <Result23 />;
    }
    else if (opt2Selected || (sessionStorage.getItem('situation8Result') === '8_ignore')) {
        return <Result26 />;
    }
    return (
        <div className='situation situation8'>
            <p className='situationText situation8Text'>
                While walking through the streets of the alien city, you notice a rogue male alien harassing a female alien.
            </p>
            <div className='options s8options'>
                <div className='row'>
                    <div className='optionButton s8optionButton' onClick={() => handleSituation('8_fight')}>
                        <p className='optionText'> Fight the rogue alien </p>
                    </div>
                    <div className='optionButton s8optionButton' onClick={() => handleSituation('8_ignore')}>
                        <p className='optionText'> Ignore the drama </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation8Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation8