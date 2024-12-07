const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const orderRouter = require('./order');
const basketRouter = require('./basket');

const router = express.Router();
router.use('/auth',authRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use('/basket', basketRouter);
module.exports = router;


