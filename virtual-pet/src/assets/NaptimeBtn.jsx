import { GiNightSleep } from "react-icons/gi";
import { CiSun } from "react-icons/ci";

export function NaptimeBtn({ boostEnergy, isDarkMode }) {
  return (
    <button className="btn" onClick={boostEnergy}>
      <div className="btn-title">
        {isDarkMode ? <CiSun size={30} /> : <GiNightSleep size={30} />}
        {isDarkMode ? "Rise & Shine!" : "Nap Time!"}
      </div>
    </button>
  );
}
