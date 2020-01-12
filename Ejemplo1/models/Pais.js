var mongoose = require('mongoose');
var provincia = require('./Provincia');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;
var ProvinciaModel = mongoose.model('Provincia');

var PaisSchema = new Schema(
{
    nombre: {type: String, required: true, max: 100, unique: true},
    abreviatura: {type: String, max: 3, required: true, unique: true},
    provincias: [ProvinciaModel.schema],
    created_at: {type: Date, default: Date.now}
});

// You can pass through a custom error message as part of the optional options argument:
PaisSchema.plugin(uniqueValidator, { message: '{PATH} already exists!' });
module.exports = mongoose.model('Pais', PaisSchema);