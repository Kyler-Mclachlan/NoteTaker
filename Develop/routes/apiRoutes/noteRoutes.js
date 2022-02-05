const router = require('express').Router();
const { notes } = require('../../db/db.json');

// router.get('/notes', (req, res) => {
//     let results = notes;
//     if (req.query) {
//       results = getNotes(req.query, results);
//     }
//     res.json(results);
//   });

router.post('/notes', (req, res) => {
  // req.body.id = notes.length.toString();
  // const newNote = saveNote(req.body, notes)
  if (req.query) {;
  // res.json(newNote);
  res.console.log('recieved!');
  }
  else{
    res.console.log('something went wrong with Post Request!')
  }
});

module.exports = router;