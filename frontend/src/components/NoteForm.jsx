// NoteForm.jsx
import React, { useState } from "react";
import axios from "axios";
import '../styles/Noteform.css';
function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/notes/add", {
      title,
      content,
    });
    alert("Note Saved!");
    setTitle("");
    setContent("");
    onNoteAdded();
  };

  return (
    <form className="add-note" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Save Note</button>
    </form>
  );
}

export default NoteForm;
