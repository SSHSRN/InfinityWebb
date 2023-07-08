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
