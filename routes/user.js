const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.put('/', userController.updateUser);
router.delete('/:id',userController.deleteUser)

module.exports = router;


