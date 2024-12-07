const express = require('express');
const orderController = require('../controllers/order');



const router = express.Router();


router.post('/',orderController.create)


module.exports = router;


