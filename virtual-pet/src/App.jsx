import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dogpark } from "./assets/PageComponents.jsx/Dogpark";
import { Home } from "./assets/PageComponents.jsx/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dogpark" element={<Dogpark />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
