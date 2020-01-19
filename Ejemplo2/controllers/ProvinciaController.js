const passport = require('passport');
const {getLogger} = require('@jwt/utils');
const log = getLogger(__dirname, __filename);

var mongoose = require('mongoose'); 
var Pais = require("../models/Pais");
var Provincia = require("../models/Provincia");

var provinciaController = {};

provinciaController.list = function(req, res)
{
    try
    {
        Pais.find({}, ['provincias']).exec(function(err, provincias)
        {
            if(err)
            { 
                log.error(err);
                return; 
            }
            res.json(provincias);
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

provinciaController.show = function(req, res)
{
    try
    {
        Pais.findOne({"provincias._id": req.params.id}).exec(function(err, provincia)
        {
            if(err)
            { 
                log.error(err);
                return; 
            }
            res.json(provincia);
        }); 
    }
    catch (err) 
    {
        log.error(err);
    }
};

provinciaController.save = function(req, res)
{
    try
    {
        Pais.findOneAndUpdate(
        req.params.id, 
        {
            $push: 
            {
                provincias: 
                {
                    nombre: req.body.nombre,
                    abreviatura: req.body.abreviatura
                }
            }
        },
        {
            new: true
        }, 
        (err, doc) => 
        {
            if (err) 
            {
                log.error(err);
            }
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

provinciaController.update = function(req, res)
{
    try
    {
        Pais.findByIdAndUpdate({"provincias._id": req.params.id}, {$set: {
        nombre: req.body.nombre,
        abreviatura: req.body.abreviatura
        }}, {new: true},
        function(err, provincia)
        {
            if(err)
            { 
                console.log('Error: ', err); 
                return;
            }
            res.json(provincia);
        });
    }
    catch (err) 
    {
        log.error(err);
    }
};

provinciaController.delete = function(req, res)
{
    try
    {
        Pais.remove({"provincias._id": req.params.id}, function(err)
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

module.exports = provinciaController;