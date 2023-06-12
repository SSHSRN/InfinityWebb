import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
