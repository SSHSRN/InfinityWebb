import { useState } from "react";
import Navbar from "./Navbar";
import "./PlanetSurvival.css";
import Intro1 from "./textgame/Intro1";

const PlanetSurvival = () => {
  const [showGame, setShowGame] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentSituation, setCurrentSituation] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleInstructionsClick = () => {
    setShowInstructions(true);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Add logic here to handle the selected option and update game variables accordingly
  };

  const handleNextSituation = () => {
    setCurrentSituation(currentSituation + 1);
    setSelectedOption(null);
    // Add logic here to handle transitioning to the next situation
  };

  const renderSituation = () => {
    switch (currentSituation) {
      case 1:
        return (
          <div className="survivalGame__play">
            <Intro1 />
          </div>
        );
      // Add more cases for additional situations
      default:
        return null;
    }
  };

  return (
    <div className="survivalPage">
      <Navbar />
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
    </div>
  );
};

export default PlanetSurvival;
