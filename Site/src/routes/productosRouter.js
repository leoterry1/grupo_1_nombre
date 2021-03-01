const express = require('express');
const router = express.Router() 

const {details, all} = require('../controllers/productosController')

router.get('/', all);
router.get('/details/:id', details);
/* router.get('/category/:category', productosController); */

module.exports = router;