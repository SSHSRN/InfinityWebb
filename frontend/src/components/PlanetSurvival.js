import { useState, useEffect } from "react";
// import Navbar from "./Navbar";
import "./PlanetSurvival.css";
import Intro1 from "./textgame/Intro1";
import axios from 'axios'

const PlanetSurvival = () => {
  const [showGame, setShowGame] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
      sessionStorage.getItem("email") ? console.log("Signed In") : window.location.replace("/");
      // get game status
      axios.post(process.env.REACT_APP_BACKEND_BASE_URL + '/getGameStatus', {
        data: {
          email: sessionStorage.getItem('email'),
        }
      }).then((res) => {
        console.log(res.data.data);
        // set the json data to sessionStorage
        (res.data.data).forEach(keyValuePair => {
          for (let key in keyValuePair) {
            console.log(key);
            console.log(keyValuePair[key]);
            sessionStorage.setItem(key, keyValuePair[key]);
          }
        });
      });
    }
  }, []);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleInstructionsClick = () => {
    setShowInstructions(true);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const renderSituation = () => {
    return (
      <div className="survivalGame__play">
        <Intro1 />
      </div>
    );
  };

  return (
    <div className="survivalPage">
      {/* <Navbar /> */}
      <div className="survivalGame">
        {showGame ? (
          renderSituation()
        ) : (
          <div className="survivalGame__menu">
            <button className="survivalGame__menu__item__button" onClick={handleInstructionsClick}>
              Instructions
            </button>
            <button className="survivalGame__menu__item__button" onClick={handlePlayClick}>
              Play
            </button>
            <button className="survivalGame__menu__item__button" onClick={handleSettingsClick}>
              Settings
            </button>
          </div>
        )}
      </div>
      {showInstructions && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Instructions</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowInstructions(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <p>Instructions da</p>
            </section>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Settings</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowSettings(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <p>Settings da...</p>
            </section>
          </div>
        </div>
      )}
      <div className="gradient-overlay"></div>
      <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
    </div>
  );
};

export default PlanetSurvival;
