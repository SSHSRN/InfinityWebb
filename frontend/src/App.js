import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import PlanetSurvival from './components/PlanetSurvival';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/survival" element={<PlanetSurvival />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
