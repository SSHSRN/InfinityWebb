import React, { useState } from 'react';
import './textgameStyles.css';
import Situation11 from './Situation11';
import Result36 from './Result36';
import axios from 'axios';

const Situation10 = () => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation10.jpg")';
        // const audio = document.querySelector('#situation10Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);

    const handleSituation = (situation) => {
        console.log(situation);
        if (situation === '10_earth') {
            sessionStorage.setItem('situation10Done', true);
            sessionStorage.setItem('situation10Result', '10_earth');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation10Done: true,
                            situation10Result: '10_earth'
                        }
                    }
                });
            }
            setOpt1Selected(true);
        }
        else if (situation === '10_explore') {
            sessionStorage.setItem('situation10Done', true);
            sessionStorage.setItem('situation10Result', '10_explore');
            if (navigator.onLine) {
                axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation10Done: true,
                            situation10Result: '10_explore'
                        }
                    }
                });
            }
            setOpt2Selected(true);
        }
    }

    if (opt1Selected || (sessionStorage.getItem('situation10Result') && sessionStorage.getItem('situation10Result') === '10_earth')) {
        return <Situation11 />;
    }
    else if (opt2Selected || (sessionStorage.getItem('situation10Result') && sessionStorage.getItem('situation10Result') === '10_explore')) {
        return <Result36 />;
    }
    return (
        <div className='situation situation10'>
            <p className='situationText situation10Text'>
                You have successfully repaired your spaceship using the parts that you bought from the shop. Now you have to decide where to go next.
            </p>
            <div className='options s10options'>
                <div className='row'>
                    <div className='optionButton s10optionButton' onClick={() => handleSituation('10_earth')}>
                        <p className='optionText'> Go to earth </p>
                    </div>
                    <div className='optionButton s10optionButton' onClick={() => handleSituation('10_explore')}>
                        <p className='optionText'> Explore the galaxy </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation10Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation10