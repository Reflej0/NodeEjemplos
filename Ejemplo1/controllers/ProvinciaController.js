var mongoose = require('mongoose');
var Pais = require("../models/Pais");
var Provincia = require("../models/Provincia");

var provinciaController = {};

provinciaController.list = function(req, res)
{
    Pais.find({}, ['provincias']).exec(function(err, provincias)
    {
        if(err)
        { 
            console.log('Error: ', err); 
            return; 
        }
        console.log("List");
        res.json(provincias);
    });

};

provinciaController.show = function(req, res)
{
    Pais.findOne({"provincias._id": req.params.id}).exec(function(err, provincia)
    {
        if(err)
        { 
            console.log('Error: ', err); 
            return; 
        }
        console.log("Show");
        res.json(provincia);
    }); 
};

provinciaController.save = function(req, res)
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
            console.log(err);
        }
    });
};

provinciaController.update = function(req, res)
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
        console.log("Updated");
        res.json(provincia);
    });
};

provinciaController.delete = function(req, res)
{
    Pais.remove({"provincias._id": req.params.id}, function(err)
    {
        if(err)
        {
            console.log('Error: ', err); 
            return; 
        }
        console.log("Deleted");
        res.json("Deleted");
    });
    
};

module.exports = provinciaController;