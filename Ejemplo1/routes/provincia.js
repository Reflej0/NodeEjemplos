var express = require('express');
var router = express.Router();

var provincia = require('../controllers/ProvinciaController.js');

router.get('/', provincia.list);
router.get('/show/:id', provincia.show);
router.post('/save/:id', provincia.save); //Del pais relacionado.
router.post('/update/:id', provincia.update);
router.post('/delete/:id', provincia.delete);

module.exports = router;