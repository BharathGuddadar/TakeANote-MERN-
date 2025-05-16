import React, { useEffect, useState } from 'react';
import NoteForm from './components/Noteform';
import NotesList from './components/NotesList';
import './styles/App.css'
function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello') // same as backend URL
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div className='main-container'>
      <h1 style={{paddingLeft:"30px"}} >{msg}</h1>
      <NoteForm/>
      <NotesList/>
    </div>
  );
}

export default App;
