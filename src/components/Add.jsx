import { useState } from "react";
import "../style/Add.css";

const Add = () => {
  const [inputAdd, setInputAdd] = useState("");
  const [notes, setNotes] = useState([]);

  const getRandomColor = () => {
    const colors = [
      "#FF5733",
      "#FFC300",
      "#6C5B7B",
      "#B2BABB",
      "#3498DB",
      "#27AE60",
      "#27ae86",
      "#ac27ae",
      "#d11fa5",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAdd = () => {
    if (inputAdd.trim() !== "") {
      setNotes([...notes, { text: inputAdd, color: getRandomColor() }]);
      setInputAdd("");
    }
  };

  const handleEdit = (index) => {
    const editedNote = prompt("Edit note:", notes[index].text);
    if (editedNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[index].text = editedNote;
      setNotes(updatedNotes);
    }
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="wrapper">
      <div className="note_container">
        <input
          type="text"
          value={inputAdd}
          onChange={(e) => setInputAdd(e.target.value)}
          className="input"
          placeholder="Add note"
        />
        <button 
        onClick={handleAdd}
        className="btn_add"
         >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>

          <span>Add Note</span>
        </button>
      </div>

      <ul className="list_items">
        {notes.map((note, index) => (
          <li
            key={index}
            style={{
              backgroundColor: note.color,
            }}
            className="notes_shape"
          >
            <h1 className="note_title">{note.text}</h1>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
