const Validator = require('validator');
var empty = require('is-empty');

module.exports = function validateRegisterInput(data) 
{
    let errors = {};
    data.name = !empty(data.name) ? data.name : '';
    data.email = !empty(data.email) ? data.email : '';
    data.password = !empty(data.password) ? data.password : '';
    data.password_confirm = !empty(data.password_confirm) ? data.password_confirm : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 }))
        errors.name = 'Nombre minimo de 2 a 30 caracteres';

    if (Validator.isEmpty(data.name))
        errors.name = 'Nombre es requerido';

    if (!Validator.isEmail(data.email))
        errors.email = 'Email es invalido';

    if (Validator.isEmpty(data.email))
        errors.email = 'Email es requerido';

    if (!Validator.isLength(data.password, { min: 6, max: 30 }))
        errors.password = 'Password necesita minimo 6 caracteres';

    if (Validator.isEmpty(data.password))
        errors.password = 'Password es requerido';

    if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 }))
        errors.password_confirm = 'Password necesita minimo 6 caracteres';

    if (!Validator.equals(data.password, data.password_confirm))
        errors.password_confirm = 'Password y confirma password';

    if (Validator.isEmpty(data.password_confirm))
        errors.password_confirm = 'Password es requerido';
    
    return {
        errors: errors,
        isValid: empty(errors)
    }
}