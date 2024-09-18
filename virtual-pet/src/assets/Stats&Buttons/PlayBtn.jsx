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
    <div>
      <button
        className="btn"
        style={{
          borderBottom: isPlayClicked
            ? "2px dotted var(--tertiary-text-color)"
            : "1px solid var(--background-color)",
        }}
      >
        <div className="btn-title" onClick={togglePlayDropdown}>
          <GiTennisBall size={30} />
          Play
        </div>
      </button>
      <div
        className="dropdown-options"
        style={{
          display: isPlayClicked ? "block" : "none",
          borderTop: isPlayClicked
            ? "none"
            : "1px solid var(--tertiary-text-color)",
        }}
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
    </div>
  );
}
