const express = require('express');
const basketController = require('../controllers/basket');



const router = express.Router();


router.post('/',basketController.create)


module.exports = router;


