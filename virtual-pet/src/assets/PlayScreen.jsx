import { ToastContainer, toast } from "react-toastify";
import { MdOutlineArrowDownward } from "react-icons/md";
import { FeedBtn } from "./Stats&Buttons/FeedBtn";
import { PlayBtn } from "./Stats&Buttons/PlayBtn.jsx";
import { NaptimeBtn } from "./Stats&Buttons/NaptimeBtn.jsx";
import { HungerStat } from "./Stats&Buttons/HungerStat.jsx";
import { HappinessStat } from "./Stats&Buttons/HappinessStat.jsx";
import { EnergyStat } from "./Stats&Buttons/EnergyStat.jsx";
import { PetName } from "./Stats&Buttons/PetName.jsx";

export function PlayScreen({
  name,
  hunger,
  energy,
  happiness,
  handleNameChange,
  handleNameSubmit,
  isDarkMode,
  isEditMode,
  setIsEditMode,
  budgetFoodBoost,
  regularFoodBoost,
  luxuryFoodBoost,
  budgetHappinessBoost,
  regularHappinessBoost,
  luxuryHappinessBoost,
  napTime,
}) {
  return (
    <div>
      <div className="outside-and-stats">
        <div className="stats">
          <HungerStat hunger={hunger} />
          <HappinessStat happiness={happiness} />
          <EnergyStat energy={energy} />
        </div>
      </div>

      <div className="pet-content">
        <PetName
          handleNameChange={handleNameChange}
          handleNameSubmit={handleNameSubmit}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          name={name}
        />
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

          <NaptimeBtn napTime={napTime} isDarkMode={isDarkMode} />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
