const express = require('express');
const router = express.Router();

const paisController = require('../controllers/PaisController');
const provinciaController = require('../controllers/ProvinciaController');
const perfilController = require('../controllers/PerfilController');

router.route('/perfil')
    .get(perfilController.getPerfil);


router.route('/pais')
    .get(paisController.list)
    .post(paisController.save);


router.route('/pais/:id')
    .get(paisController.show)
    .put(paisController.update)
    .delete(paisController.delete);

router.route('/provincia')
    .get(provinciaController.list)
    .post(provinciaController.save);


router.route('/provincia/:id')
    .get(provinciaController.show)
    .put(provinciaController.update)
    .delete(provinciaController.delete);


module.exports = router;