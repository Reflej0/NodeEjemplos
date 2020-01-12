var express = require('express');
var router = express.Router();

var pais = require('../controllers/PaisController.js');

router.get('/', pais.list);
router.get('/show/:id', pais.show);
router.post('/save', pais.save);
router.post('/update/:id', pais.update);
router.post('/delete/:id', pais.delete);

module.exports = router;