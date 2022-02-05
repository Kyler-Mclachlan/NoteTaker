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
  // req.body is where our incoming content will be
  console.log('post recieved!');
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;