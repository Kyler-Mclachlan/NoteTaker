const fs = require('fs');
const path = require('path');
const express = require('express');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// functions

function createNewNote(body, notesArray) {
    const note = body;
    // notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes : notesArray }, null, 2)
    );
    return note;
  }

  function validateNotes(notes) {
    if (!notes.title || typeof notes.title  !== 'string') {
      return false;
    }
    if (!notes.text || typeof animal.species !== 'string') {
      return false;
    }
    return true;
  }

  

// api routes


app.post('/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log('post recieved!');
    console.log(req.body);
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

// html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './Develop/public/index.html'));
//   });
  

module.exports = app;  

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  