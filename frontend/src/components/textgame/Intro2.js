import React, { useState } from 'react';
import Situation1 from './Situation1';
import './textgameStyles.css';

const Intro2 = () => {
  document.querySelector('.survivalGame').style.backgroundImage = 'url("./assets/intro2.jpg")';
  // const audio = document.querySelector('#intro2Audio');
  // if (audio.paused) {
  //     audio.play();
  // }

  const [showNext, setShowNext] = useState(false);

  const handleNextClick = () => {
    sessionStorage.setItem('intro2Done', true);
    setShowNext(true);
  };

  if (showNext || sessionStorage.getItem('intro2Done')) {
    return <Situation1 />;
  }

  return (
    <div className='intro intro2'>
      <p className='introText'>
        On scanning the planet, you found that the planet is habitable and has a breathable atmosphere and has water sources. Now, you can explore the planet and look for resources to repair your spaceship. You will encounter various situations and you will have to make decisions based on the situation. You will have to make the right decisions to survive. Good luck!
      </p>
      <button className="nextButton" onClick={handleNextClick}>
        Next &#8594;
      </button>
      {/* <audio id="intro2Audio" src="https://cdn10.solamutha.xyz/download/MsONNlECYNV9fbULaNmuJQ/1688224751/t/2016/Kabali/128/Neruppu-Da.mp3" /> */}
    </div>
  )
}

export default Intro2