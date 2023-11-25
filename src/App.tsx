import "./App.css";
import StartGamePage from "./components/StartGamePage";
import GamePage from "./components/GamePage";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import GridSize6x6 from "./components/GridSize6x6";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartGamePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game/page6x6" element={<GridSize6x6 />} />

        {/* <Route path="/details/:id" element={<GamePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
