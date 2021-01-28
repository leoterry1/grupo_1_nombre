const express = require('express');
const router = express.Router() 

const userController = require('../controllers/userController')

router.get('/', userController.user);
/* router.get('/login', userController);
router.get('/signup', userController); */


module.exports = router;