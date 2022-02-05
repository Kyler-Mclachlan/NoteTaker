const router = require('express').Router();
const noteRoutes = require('../../routes/apiRoutes/noteRoutes');

router.use(noteRoutes);

module.exports = router;