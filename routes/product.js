const express = require('express');
const productController = require('../controllers/product');



const router = express.Router();


router.post('/',productController.create)
router.put('/',productController.update)
router.get('/',productController.getAll)
router.get('/:id',productController.getSingle)
router.delete('/',productController.delete)


module.exports = router;


