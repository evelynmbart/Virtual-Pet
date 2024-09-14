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
      <button className="btn">
        <div className="btn-title" onClick={toggleFoodDropdown}>
          <GiDogBowl size={16} />
          Feed
        </div>
      </button>
      <div
        className="food-dropdown"
        style={{
          display: isFoodClicked ? "block" : "none",
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
