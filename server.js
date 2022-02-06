const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes }  = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// functions

function createNewNote(body, notesArray) {
  // console.log(body);
  // console.log(typeof notesArray);
  // return body;
  const note = body;
  notesArray.push(note);
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


app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
    // req.body is where our incoming content will be
    console.log('post received!');
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

app.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  
  const notesIndex = notes.findIndex(p => p.id == id);
  notes.splice(notesIndex, 1);
  res.send()
})


// html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  

module.exports = app;  

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  