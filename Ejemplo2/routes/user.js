const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.route('/register')
    .post(userController.postRegistro);

router.route('/login')
    .post(userController.postLogin);

module.exports = router;