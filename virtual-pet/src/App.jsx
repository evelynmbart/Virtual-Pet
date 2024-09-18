import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Dogpark } from "./assets/PageComponents.jsx/Dogpark";
import { Home } from "./assets/PageComponents.jsx/Home";
import { MdOutlinePets } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./App.css";

function App() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  console.log(isHamburgerClicked);

  const hamburgerMenuStyles = {
    display: isHamburgerClicked ? "block" : "none",
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2 className="title">
          <MdOutlinePets className="pawOne" />
          <MdOutlinePets className="pawTwo" />
          <MdOutlinePets className="pawThree" />
          VIRTUAL PET
          <MdOutlinePets className="pawFour" />
          <MdOutlinePets className="pawFive" />
          <MdOutlinePets className="pawSix" />
        </h2>
        <div className="links">
          <NavLink to="/" className="link" style={hamburgerMenuStyles}>
            Home
          </NavLink>
          <NavLink to="dogpark" className="link" style={hamburgerMenuStyles}>
            Dog Park
          </NavLink>
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
            size={40}
          />
        </div>
      </nav>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="dogpark" element={<Dogpark />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
