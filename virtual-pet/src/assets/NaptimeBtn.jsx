import { GiNightSleep } from "react-icons/gi";

export function NaptimeBtn({ boostEnergy }) {
  return (
    <button className="btn" onClick={boostEnergy}>
      <div className="btn-title">
        <GiNightSleep size={16} /> Nap Time
      </div>
    </button>
  );
}
