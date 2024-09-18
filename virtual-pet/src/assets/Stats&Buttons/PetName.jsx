import { MdEdit } from "react-icons/md";

export function PetName({
  name,
  handleNameChange,
  handleNameSubmit,
  isEditMode,
  setIsEditMode,
}) {
  return (
    <div>
      {isEditMode ? (
        <form onSubmit={handleNameSubmit}>
          <label>
            Your Pet's Name :
            <input
              type="text"
              value={name}
              className="pet-name-input"
              onChange={handleNameChange}
              placeholder="Buster"
            />
          </label>
          <button className="submit-name-btn">Submit</button>
        </form>
      ) : (
        <h3 className="pet-name-title">
          Hi! I'm {name}
          <MdEdit size={20} onClick={() => setIsEditMode(!isEditMode)} />
        </h3>
      )}
    </div>
  );
}
