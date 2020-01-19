const passport = require('passport');
const {getLogger} = require('@jwt/utils');
const log = getLogger(__dirname, __filename);

var mongoose = require('mongoose');
var PaisModel = require("../models/Pais");
var Pais = mongoose.model('Pais');

var paisController = {};

paisController.list = function(req, res)
{
    try
    {
        Pais.find({}).exec(function(err, paises)
        {
            if(err)
            { 
                log.error(err);
                return; 
            }
            res.json(paises);
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

paisController.show = function(req, res)
{
    try
    {
        Pais.findOne({_id: req.params.id}).exec(function(err, pais)
        {
            if(err)
            { 
                log.error(err);
                return; 
            }
            res.json(pais);
        }); 
    }
    catch (err) 
    {
        log.error(err);
    }
};

paisController.save = function(req, res)
{
    try
    {
        var pais = new Pais(req.body);
        pais.save(function(err)
        {
            if(err)
            {
                log.error(err);
                return; 
            }
            res.json("Save");
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

paisController.update = function(req, res)
{
    try
    {
        Pais.findByIdAndUpdate(req.params.id, {$set: {
        nombre: req.body.nombre,
        abreviatura: req.body.abreviatura
        }}, {new: true},
        function(err, pais)
        {
            if(err)
            { 
                log.error(err);
                return;
            }
        res.json(pais);
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

paisController.delete = function(req, res)
{
    try
    {
        Pais.remove({_id: req.params.id}, function(err)
        {
            if(err)
            {
                log.error(err);
                return; 
            }
            res.json("Deleted");
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

module.exports = paisController;