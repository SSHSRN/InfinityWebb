import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import PlanetSurvival from './components/PlanetSurvival';
import { useState } from 'react';
import Team from './components/Team';
import ContactUsPage from './components/ContactUsPage';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  function handleOnline() {
    setIsOnline(true);
  }

  function handleOffline() {
    setIsOnline(false);
  }

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  return (
    <div className="App">
      <div className='hidden'>
        <img src='./assets/home.jpg' alt='home' />
        <img src='./assets/intro1.jpg' alt='intro1' />
        <img src='./assets/intro2.jpg' alt='intro2' />
        <img src='./assets/result1.jpg' alt='result1' />
        <img src='./assets/result2.jpg' alt='result2' />
        <img src='./assets/result3.jpg' alt='result3' />
        <img src='./assets/result4.png' alt='result4' />
        <img src='./assets/result5.jpg' alt='result5' />
        <img src='./assets/result6.jpg' alt='result6' />
        <img src='./assets/result7.jpg' alt='result7' />
        <img src='./assets/result8.jpg' alt='result8' />
        <img src='./assets/result9.jpg' alt='result9' />
        <img src='./assets/result10.jpg' alt='result10' />
        <img src='./assets/result11.jpg' alt='result11' />
        <img src='./assets/result12.jpg' alt='result12' />
        <img src='./assets/result13.jpg' alt='result13' />
        <img src='./assets/result14.jpg' alt='result14' />
        <img src='./assets/result15.jpg' alt='result15' />
        <img src='./assets/result16.jpg' alt='result16' />
        <img src='./assets/result17.jpg' alt='result17' />
        <img src='./assets/result18.jpg' alt='result18' />
        <img src='./assets/result19.jpg' alt='result19' />
        <img src='./assets/result20.jpg' alt='result20' />
        <img src='./assets/result21.jpg' alt='result21' />
        <img src='./assets/result22.jpg' alt='result22' />
        <img src='./assets/result23.jpg' alt='result23' />
        <img src='./assets/result24.jpg' alt='result24' />
        <img src='./assets/result25.jpg' alt='result25' />
        <img src='./assets/result26.jpg' alt='result26' />
        <img src='./assets/result27.jpg' alt='result27' />
        <img src='./assets/result28.jpg' alt='result28' />
        <img src='./assets/result29.jpg' alt='result29' />
        <img src='./assets/result30.jpg' alt='result30' />
        <img src='./assets/result31.jpg' alt='result31' />
        <img src='./assets/result32.jpg' alt='result32' />
        <img src='./assets/result33.jpg' alt='result33' />
        <img src='./assets/result34.jpg' alt='result34' />
        <img src='./assets/result35.jpg' alt='result35' />
        <img src='./assets/result36.jpg' alt='result36' />
        <img src='./assets/situation1.jpg' alt='situation1' />
        <img src='./assets/situation2.jpg' alt='situation2' />
        <img src='./assets/situation3.jpg' alt='situation3' />
        <img src='./assets/situation4.jpg' alt='situation4' />
        <img src='./assets/situation5.jpg' alt='situation5' />
        <img src='./assets/situation6.jpg' alt='situation6' />
        <img src='./assets/situation7.jpg' alt='situation7' />
        <img src='./assets/situation8.jpg' alt='situation8' />
        <img src='./assets/situation9.jpg' alt='situation9' />
        <img src='./assets/situation10.jpg' alt='situation10' />
        <img src='./assets/situation11.jpg' alt='situation11' />
        <img src='./assets/situation12.jpg' alt='situation12' />
      </div>
      {isOnline ?
        (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/main" element={<Mainpage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/survival" element={<PlanetSurvival />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <PlanetSurvival />
        )
      }
    </div>
  );
}

export default App;
