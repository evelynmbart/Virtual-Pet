import { useState } from "react";
import { GiTennisBall } from "react-icons/gi";

export function PlayBtn({
  budgetHappinessBoost,
  regularHappinessBoost,
  luxuryHappinessBoost,
}) {
  const [isPlayClicked, setIsPlayClicked] = useState(false);
  const togglePlayDropdown = () => {
    setIsPlayClicked(!isPlayClicked);
  };
  return (
    <button className="btn">
      <div className="btn-title" onClick={togglePlayDropdown}>
        <GiTennisBall size={16} />
        Play
      </div>
      <div
        className="food-dropdown"
        style={{ display: isPlayClicked ? "block" : "none" }}
      >
        <div id="budget-food" onClick={budgetHappinessBoost}>
          Budget
        </div>
        <div id="regular-food" onClick={regularHappinessBoost}>
          Regular
        </div>
        <div id="luxury-food" onClick={luxuryHappinessBoost}>
          Luxury
        </div>
      </div>
    </button>
  );
}
