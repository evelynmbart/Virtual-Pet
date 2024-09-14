import { useState, useEffect } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlinePets } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  MAX_STATS,
  SLEEP_INTERVAL,
  BUDGET_FEED_BOOST,
  BUDGET_HAPPINESS_BOOST,
  BUDGET_ENERGY_BOOST,
  REGULAR_FEED_BOOST,
  REGULAR_HAPPINESS_BOOST,
  REGULAR_ENERGY_BOOST,
  LUXURY_FEED_BOOST,
  LUXURY_HAPPINESS_BOOST,
  LUXURY_ENERGY_BOOST,
} from "./assets/settings";
import { FeedBtn } from "./assets/FeedBtn";
import { PlayBtn } from "./assets/PlayBtn";
import { NaptimeBtn } from "./assets/NaptimeBtn";

function App() {
  const [hunger, setHunger] = useState(MAX_STATS);
  const [happiness, setHappiness] = useState(MAX_STATS);
  const [energy, setEnergy] = useState(MAX_STATS);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DECREMENT INTERVAL IN USEEFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prevHunger) => {
        if (prevHunger == 0) {
          clearInterval(interval);
          return 0;
        }
        return prevHunger - 1;
      });
    }, SLEEP_INTERVAL);
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
    }, SLEEP_INTERVAL);
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
    }, SLEEP_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // ACTION INCREASING BUTTONS

  const budgetFoodBoost = () => {
    const newHunger = hunger + BUDGET_FEED_BOOST;
    if (newHunger > MAX_STATS) {
      toast.warn("Stop! Your pet will pop!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHunger(newHunger);
    }
  };
  const regularFoodBoost = () => {
    const newHunger = hunger + REGULAR_FEED_BOOST;
    if (newHunger > MAX_STATS) {
      toast.warn("Stop! Your pet will pop!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHunger(newHunger);
    }
  };
  const luxuryFoodBoost = () => {
    const newHunger = hunger + LUXURY_FEED_BOOST;
    if (newHunger > MAX_STATS) {
      toast.warn("Stop! Your pet will pop!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHunger(newHunger);
    }
  };

  //if budget is clicked, set hunger to hunger + budget
  // if regular is clicked '' ''
  // if luxury is clicked '' ''

  const budgetHappinessBoost = () => {
    const newHappiness = happiness + BUDGET_HAPPINESS_BOOST;
    if (newHappiness > MAX_STATS) {
      toast.warn("Stop! Your pet needs a break!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHappiness(newHappiness);
    }
  };
  const regularHappinessBoost = () => {
    const newHappiness = happiness + REGULAR_HAPPINESS_BOOST;
    if (newHappiness > MAX_STATS) {
      toast.warn("Stop! Your pet needs a break!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHappiness(newHappiness);
    }
  };
  const luxuryHappinessBoost = () => {
    const newHappiness = happiness + LUXURY_HAPPINESS_BOOST;
    if (newHappiness > MAX_STATS) {
      toast.warn("Stop! Your pet needs a break!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setHappiness(newHappiness);
    }
  };

  const boostEnergy = () => {
    const newEnergy = energy + REGULAR_ENERGY_BOOST;
    setIsDarkMode(!isDarkMode);
    // NEED LOGIC HERE TO CANCEL DARKMODE FROM WORKING
    // IF PET IS RESTED ENOUGH
    if (newEnergy > MAX_STATS) {
      toast.warn("Stop! Your pet needs some rest!", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    } else {
      setEnergy(newEnergy);
    }
  };

  return (
    <div className="html" data-theme={isDarkMode ? "dark" : "light"}>
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
      </nav>
      <div className="main-content">
        <div className="stats">
          <div className="hunger-stat">
            Hunger :
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  style={{
                    width: `${hunger}%`,
                    backgroundColor:
                      hunger > 80
                        ? "#A3EB91"
                        : hunger < 80 && hunger >= 50
                        ? "#E3FB8F"
                        : hunger < 50 && hunger >= 20
                        ? "#FFA500"
                        : hunger < 20
                        ? "#ff4500"
                        : "#A3EB91",
                    height: "100%",
                    borderRadius: "20px",
                    transition: "width 0.1s ease-in-out",
                  }}

                  // if hunger > 50 display green, if hunger is < 50 and > 20 display orange, if hunger < 20 display red
                ></div>
              </div>
            </div>
          </div>
          <div className="happiness-stat">
            Happiness :
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  style={{
                    width: `${happiness}%`,
                    backgroundColor:
                      happiness > 80
                        ? "#A3EB91"
                        : happiness < 80 && happiness >= 50
                        ? "#E3FB8F"
                        : happiness < 50 && happiness >= 20
                        ? "#FFA500"
                        : happiness < 20
                        ? "#ff4500"
                        : "#A3EB91",
                    height: "100%",
                    borderRadius: "20px",
                    transition: "width 0.1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="energy-stat">
            Energy :
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  style={{
                    width: `${energy}%`,
                    backgroundColor:
                      energy > 80
                        ? "#A3EB91"
                        : energy < 80 && energy >= 50
                        ? "#E3FB8F"
                        : energy < 50 && energy >= 20
                        ? "#FFA500"
                        : energy < 20
                        ? "#ff4500"
                        : "#A3EB91",
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
          <FeedBtn
            budgetFoodBoost={budgetFoodBoost}
            regularFoodBoost={regularFoodBoost}
            luxuryFoodBoost={luxuryFoodBoost}
          />
          <PlayBtn
            budgetHappinessBoost={budgetHappinessBoost}
            regularHappinessBoost={regularHappinessBoost}
            luxuryHappinessBoost={luxuryHappinessBoost}
          />

          <NaptimeBtn boostEnergy={boostEnergy} isDarkMode={isDarkMode} />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
