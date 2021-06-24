// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const uploadsRouter = require('./uploads.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/upload', uploadsRouter);

module.exports = router;
