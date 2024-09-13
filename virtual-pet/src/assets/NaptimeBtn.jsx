import { useState } from "react";
import { GiNightSleep } from "react-icons/gi";

export function NaptimeBtn({ boostEnergy }) {
  return (
    <button className="btn" onClick={boostEnergy}>
      <GiNightSleep size={16} />
      Nap Time
    </button>
  );
}
