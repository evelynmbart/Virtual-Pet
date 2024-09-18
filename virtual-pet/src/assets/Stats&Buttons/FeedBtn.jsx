import React from "react";
import { useState } from "react";
import { GiDogBowl } from "react-icons/gi";

export function FeedBtn({
  budgetFoodBoost,
  regularFoodBoost,
  luxuryFoodBoost,
}) {
  const [isFoodClicked, setIsFoodClicked] = useState(false);

  const toggleFoodDropdown = () => {
    setIsFoodClicked(!isFoodClicked);
  };
  return (
    <div>
      <button
        className="btn"
        style={{
          borderBottom: isFoodClicked
            ? "2px dotted var(--tertiary-text-color)"
            : "1px solid var(--background-color)",
        }}
      >
        <div className="btn-title" onClick={toggleFoodDropdown}>
          <GiDogBowl size={30} />
          Feed
        </div>
      </button>
      <div
        className="dropdown-options"
        style={{
          display: isFoodClicked ? "block" : "none",
          borderTop: isFoodClicked
            ? "none"
            : "1px solid var(--tertiary-text-color)",
        }}
      >
        <div id="budget-food" onClick={budgetFoodBoost}>
          Budget
        </div>
        <div id="regular-food" onClick={regularFoodBoost}>
          Regular
        </div>
        <div id="luxury-food" onClick={luxuryFoodBoost}>
          Luxury
        </div>
      </div>
    </div>
  );
}
