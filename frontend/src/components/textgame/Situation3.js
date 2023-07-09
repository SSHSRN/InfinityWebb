import React, { useState } from 'react';
import './textgameStyles.css';
import Result9 from './Result9';
import Result10 from './Result10';
import Result11 from './Result11';
import Result12 from './Result12';
import axios from 'axios';

const Situation3 = () => {
    document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/situation2.jpg")';
    // const audio = document.querySelector('#situation3Audio');
    // if (audio.paused) {
    //     audio.play();
    // }

    const [opt1Selected, setOpt1Selected] = useState(false);
    const [opt2Selected, setOpt2Selected] = useState(false);
    const [opt3Selected, setOpt3Selected] = useState(false);
    const [opt4Selected, setOpt4Selected] = useState(false);

    const handleSituation = async(situation) => {
        console.log(situation);
        if (situation === '3_gems') {
            sessionStorage.setItem('situation3Done', true);
            sessionStorage.setItem('situation3Result', '3_gems');
            sessionStorage.setItem('gemsTaken', true);
            if (navigator.onLine) {
                await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation3Done: true,
                            situation3Result: '3_gems',
                            gemsTaken: true
                        }
                    }
                });
            }
            setOpt1Selected(true);
        }
        else if (situation === '3_ring') {
            sessionStorage.setItem('situation3Done', true);
            sessionStorage.setItem('situation3Result', '3_ring');
            sessionStorage.setItem('ringTaken', true);
            if (navigator.onLine) {
                await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation3Done: true,
                            situation3Result: '3_ring',
                            ringTaken: true
                        }
                    }
                });
            }
            setOpt2Selected(true);
        }
        else if (situation === '3_health_potion') {
            sessionStorage.setItem('situation3Done', true);
            sessionStorage.setItem('situation3Result', '3_health_potion');
            sessionStorage.setItem('healthPotionTaken', true);
            if (navigator.onLine) {
                await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation3Done: true,
                            situation3Result: '3_health_potion',
                            healthPotionTaken: true
                        }
                    }
                });
            }
            setOpt3Selected(true);
        }
        else if (situation === '3_return') {
            sessionStorage.setItem('situation3Done', true);
            sessionStorage.setItem('situation3Result', '3_return');
            sessionStorage.setItem('noneTaken', true);
            if (navigator.onLine) {
                await axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/updateGameStatus', {
                    data: {
                        email: sessionStorage.getItem('email'),
                        gameStatus: {
                            situation3Done: true,
                            situation3Result: '3_return',
                            noneTaken: true
                        }
                    }
                });
            }
            setOpt4Selected(true);
        }
    }

    if (opt1Selected) {
        return <Result9 />;
    }
    else if (opt2Selected) {
        return <Result10 />;
    }
    else if (opt3Selected) {
        return <Result11 />;
    }
    else if (opt4Selected) {
        console.log('opt4Selected');
        return <Result12 />;
    }
    return (
        <div className='situation situation3'>
            <p className='situationText situation3Text'>
                You also notice that the realm is collapsing and you have to make a decision quickly and return back.
            </p>
            <div className='options s3options'>
                <div className='row'>
                    <div className='optionButton s3optionButton' onClick={() => handleSituation('3_gems')}>
                        <img className='optionImage' src='./assets/situation3_option1.jpg' alt='gemstones' />
                        <p className='optionText'> Take some gemstones </p>
                    </div>
                    <div className='optionButton s3optionButton' onClick={() => handleSituation('3_ring')}>
                        <img className='optionImage' src='./assets/situation3_option2.jpg' alt='ring' />
                        <p className='optionText'> Take a ring from a noble looking corpse </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='optionButton s3optionButton' onClick={() => handleSituation('3_health_potion')}>
                        <img className='optionImage' src='./assets/situation3_option3.jpg' alt='health potion' />
                        <p className='optionText'> Drink infinite health potion </p>
                    </div>
                    <div className='optionButton s3optionButton' onClick={() => handleSituation('3_return')}>
                        <img className='optionImage' src='./assets/situation3_option4.jpg' alt='portal' />
                        <p className='optionText'> Just return </p>
                    </div>
                </div>
            </div>
            {/* <audio id="situation2Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Situation3