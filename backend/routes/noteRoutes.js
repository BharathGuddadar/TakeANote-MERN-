// routes/noteRoutes.js
import express from 'express';
import Note from '../models/Note.js'; 

const router = express.Router();

// GET all notes(SHOW)
router.get('/notes/show', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// POST a new note)(ADD)
router.post('/notes/add', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: 'Note saved!', note: newNote });
  } catch (err) {
    res.status(400).json({ error: 'Error saving note', details: err });
  }
});

//DELETE
router.delete('/api/notes/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted', deletedNote });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting note', error: err });
  }
});

export default router;
