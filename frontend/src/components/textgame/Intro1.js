import React, { useEffect, useState } from 'react';
import Intro2 from './Intro2';
import './textgameStyles.css';

const Intro1 = () => {
    useEffect(() => {
        document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/intro1.jpg")';
        // const audio = document.querySelector('#intro1Audio');
        // if (audio.paused) {
        //     audio.play();
        // }
    }, []);

    const [showNext, setShowNext] = useState(false);

    const handleNextClick = () => {
        setShowNext(true);
    };

    if (showNext) {
        return <Intro2 />;
    }

    return (
        <div className='intro intro1'>
            <p className='introText'>
                Being the good at multitasking, you thought it would be an excellent idea to watch the Tamil movie Tik-Tik-Tik by actor Jayam Ravi and pilot a spaceship at the same time. As you were too engrossed in the movie, you failed to notice the meteor shower that was heading your way. This collision resulted in damage to your spaceship's navigation system and comms, and you were forced to crash land on a nearby planet.
            </p>
            <button className="nextButton" onClick={handleNextClick}>
                Next &#8594;
            </button>
            {/* <audio id="intro1Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
        </div>
    )
}

export default Intro1