const router = require('express').Router();

const NotesRoutes = require('./notes');

router.use('/notes', NotesRoutes);

module.exports = router;