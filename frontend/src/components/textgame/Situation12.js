import React, { useState } from 'react';
import './textgameStyles.css';
import Result33 from './Result33';
import Result35 from './Result35';
import axios from 'axios';

const Situation12 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation12.jpg")';
    // const audio = document.querySelector('#situation12Audio');
    // if (audio.paused) {
    //     audio.play();
    // }
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '12_senior') {
            sessionStorage.setItem('situation12Done', true);
            sessionStorage.setItem('situation12Result', '12_senior');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation12Done: true,
                            situation12Result: '12_senior'
                        }
                    }
                });
            }
            setOpt1Selected(true);
        }
        else if (situation === '12_senior') {
            sessionStorage.setItem('situation12Done', true);
            sessionStorage.setItem('situation12Result', '12_senior');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation12Done: true,
                            situation12Result: '12_senior'
                        }
                    }
                });
            }
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || (sessionStorage.getItem('situation12Result') && sessionStorage.getItem('situation12Result') === '12_senior')) {
        return <Result33 />;
    }
    else if (opt2Selected || (sessionStorage.getItem('situation12Result') && sessionStorage.getItem('situation12Result') === '12_senior')) {
        return <Result35 />;
    }
    return (
        <div className='situation situation12'>
            <p className='situationText situation12Text'>
                You have reached earth, but you are still in the alien suit and you find it impossible to take it off. You are now stuck in the alien suit and you have to decide what to do next.
            </p>
            <div className='options s12options'>
                <div className='row'>
                    <div className='optionButton s12optionButton' onClick={() => handleSituation('12_senior')}>
                        <p className='optionText'> Meet your senior scientist </p>
                    </div>
                    <div className='optionButton s12optionButton' onClick={() => handleSituation('12_senior')}>
                        <p className='optionText'> Meet your friends at work </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation12Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation12