import { useState, useEffect } from "react";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => Math.max(prev - 1, 0)); // Decreases hunger every 5 seconds
    }, SLEEP_INTERVAL);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((prev) => Math.max(prev - 1, 0)); // Decreases hunger every 5 seconds
    }, SLEEP_INTERVAL);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prev) => Math.max(prev - 1, 0)); // Decreases hunger every 5 seconds
    }, SLEEP_INTERVAL);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <div className="main-container">
        <nav className="navbar">
          <h2 className="title">Virtual Pet</h2>
          <div>
            <TbBaselineDensityMedium size={32} color="white" />
          </div>
        </nav>
        <hr />
        <div className="main-content">
          <div className="stats">
            <div className="hunger-stat">
              Hunger: {hunger}/{MAX_STATS}
            </div>
            <div className="happiness-stat">
              Happiness: {happiness}/{MAX_STATS}
            </div>
            <div className="energy-stat">
              Energy: {energy}/{MAX_STATS}
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
