import { useState, useEffect } from "react";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlinePets } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  SLEEP_INTERVAL,
  REGULAR_FEED_BOOST,
  MAX_STATS,
  REGULAR_ENERGY_BOOST,
  REGULAR_HAPPINESS_BOOST,
} from "./assets/settings";

function App() {
  const [hunger, setHunger] = useState(MAX_STATS);
  const [happiness, setHappiness] = useState(MAX_STATS);
  const [energy, setEnergy] = useState(MAX_STATS);
  const [progress, setProgress] = useState(MAX_STATS);

  // INTERVAL DECREMENTATION OF STATS
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHunger((prev) => Math.max(prev - 1, 0)); // Decreases hunger every 5 seconds
  //   }, SLEEP_INTERVAL);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prevHunger) => {
        if (prevHunger == 0) {
          clearInterval(interval);
          return 0;
        }
        return prevHunger - 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((prevHappiness) => {
        if (prevHappiness == 0) {
          clearInterval(interval);
          return 0;
        }
        return prevHappiness - 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => {
        if (prevEnergy == 0) {
          clearInterval(interval);
          return 0;
        }
        return prevEnergy - 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ACTION INCREASING BUTTONS

  const boostHunger = () => {
    const newHunger = hunger + REGULAR_FEED_BOOST;
    if (newHunger > MAX_STATS) {
      toast.warn("Stop! Your pet will pop!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    } else {
      setHunger(newHunger);
    }
  };

  const boostHappiness = () => {
    const newHappiness = happiness + REGULAR_HAPPINESS_BOOST;
    if (newHappiness > MAX_STATS) {
      toast.warn("Stop! Your pet needs a break!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    } else {
      setHappiness(newHappiness);
    }
    if (newHappiness < MAX_STATS / 2) {
      toast("WARNING: Your pet is mega depressed! Help them!");
    }
  };

  const boostEnergy = () => {
    const newEnergy = energy + REGULAR_ENERGY_BOOST;
    if (newEnergy > MAX_STATS) {
      toast.warn("Stop! Your pet needs some rest!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    } else {
      setEnergy(newEnergy);
    }
  };

  // HTML
  return (
    <>
      <div className="main-container">
        <nav className="navbar">
          <h2 className="title">
            <MdOutlinePets className="pawOne" />
            <MdOutlinePets className="pawTwo" />
            Virtual Pet
            <MdOutlinePets className="pawThree" />
            <MdOutlinePets className="pawFour" />
          </h2>
        </nav>
        <hr />
        <div className="main-content">
          <div className="stats">
            <div className="hunger-stat">
              Hunger:
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    style={{
                      width: `${hunger}%`,
                      backgroundColor: hunger > 30 ? "#76c7c0" : "#ff4500", // Change color if progress < 20%
                      height: "100%",
                      borderRadius: "20px",
                      transition: "width 0.1s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="happiness-stat">
              Happiness:
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    style={{
                      width: `${happiness}%`,
                      backgroundColor: happiness > 30 ? "#76c7c0" : "#ff4500", // Change color if progress < 20%
                      height: "100%",
                      borderRadius: "20px",
                      transition: "width 0.1s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="energy-stat">
              Energy:
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    style={{
                      width: `${energy}%`,
                      backgroundColor: energy > 30 ? "#76c7c0" : "#ff4500", // Change color if progress < 20%
                      height: "100%",
                      borderRadius: "20px",
                      transition: "width 0.3s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="action-btns">
            <button onClick={boostHunger}>
              Feed
              <RiArrowDropDownFill size={16} />
            </button>
            <button onClick={boostHappiness}>
              Play <RiArrowDropDownFill size={16} />
            </button>
            <button onClick={boostEnergy}>Nap Time</button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
