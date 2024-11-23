const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./user');

const router = express.Router();
router.use('/auth',authRouter);
router.use('/user', userRouter)
module.exports = router;


