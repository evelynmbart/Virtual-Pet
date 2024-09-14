import { MdEdit } from "react-icons/md";

export function PetName({ handleNameChange, handleNameSubmit }) {
  return (
    <form onSubmit={handleNameSubmit}>
      <label>
        <MdEdit size={16} />
        Your Pet's Name :
        <input
          type="text"
          className="pet-name-input"
          onChange={handleNameChange}
          placeholder="Fluffy"
        />
      </label>
      <button className="submit-name-btn">Submit</button>
    </form>
  );
}
