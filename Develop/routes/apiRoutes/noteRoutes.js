const router = require('express').Router();
const { getNotes } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = getNotes(req.query, results);
    }
    res.json(results);
  });

module.exports  = router;