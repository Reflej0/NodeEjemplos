var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var ProvinciaSchema = new Schema(
{
    nombre: {type: String, required: true, max: 100, unique: true},
    abreviatura: {type: String, max: 6, required: true, unique: true},
    created_at: {type: Date, default: Date.now}
});

// You can pass through a custom error message as part of the optional options argument:
ProvinciaSchema.plugin(uniqueValidator, { message: '{PATH} already exists!' });
module.exports = mongoose.model('Provincia', ProvinciaSchema);