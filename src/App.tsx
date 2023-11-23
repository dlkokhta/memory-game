import "./App.css";
import StartGamePage from "./components/StartGamePage";
import GamePage from "./components/GamePage";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartGamePage />} />
        <Route path="/game" element={<GamePage />} />

        {/* <Route path="/details/:id" element={<GamePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
