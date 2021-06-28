// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const uploadsRouter = require('./uploads.js');
const imageRouter = require('./image.js');
const commentRouter = require('./comments.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/upload', uploadsRouter);

router.use('/image', imageRouter);

router.use('/comments', commentRouter);

module.exports = router;
