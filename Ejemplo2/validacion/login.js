const Validator = require('validator');
var empty = require('is-empty');

module.exports = function validateLoginInput(data) 
{
    let errors = {};
    data.email = !empty(data.email) ? data.email : '';
    data.password = !empty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email))
        errors.email = 'Email es incorrecto';

    if (Validator.isEmpty(data.email))
        errors.email = 'Email es requerido';

    if (!Validator.isLength(data.password, { min: 6, max: 30 }))
        errors.password = 'Minimo 6 caracteres';

    if (Validator.isEmpty(data.password))
        errors.password = 'Password es requerido';

    return {
        errors: errors,
        isValid: empty(errors)
    }
}