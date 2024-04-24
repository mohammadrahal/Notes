import React, { useState } from 'react';

const Add = () => {
  const [inputAdd, setInputAdd] = useState('');
  const [notes, setNotes] = useState([]);

  const getRandomColor = () => {
    const colors = ['#FF5733', '#FFC300', '#6C5B7B', '#B2BABB', '#3498DB', '#27AE60','#27ae86', '#ac27ae', '#d11fa5' ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAdd = () => {
    if (inputAdd.trim() !== '') {
      setNotes([...notes, { text: inputAdd, color: getRandomColor() }]);
      setInputAdd('');
    }
  };

  const handleEdit = (index) => {
    const editedNote = prompt('Edit note:', notes[index].text);
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
    <div>
      <input
        type="text"
        value={inputAdd}
        onChange={(e) => setInputAdd(e.target.value)}
        placeholder="Add note"
      />
      <button onClick={handleAdd}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            style={{ backgroundColor: note.color, color: 'white' }}
          >
            {note.text}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
