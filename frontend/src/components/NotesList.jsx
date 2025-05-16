import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/NotesLists.css'
const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes/show')
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
      });
      // Remove deleted note from local state
      setNotes((prevNotes) => prevNotes.filter(note => note._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div className='saved-notes'>
      <h2>Saved Notes</h2>
      <div className='lists' style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
    {notes.map((note) => (
      <div className='list'
        key={note._id}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          width: '250px',
          backgroundColor: '#000',
          boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={() => handleDelete(note._id)}>🗑️Delete</button>
      </div>
    ))}
  </div>
    </div>
  );
};

export default NotesList;
