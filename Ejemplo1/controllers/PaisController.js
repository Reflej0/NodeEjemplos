var mongoose = require('mongoose');
var PaisModel = require("../models/Pais");
var Pais = mongoose.model('Pais');

var paisController = {};

paisController.list = function(req, res)
{
    
    Pais.find({}).exec(function(err, paises)
    {
        if(err)
        { 
            console.log('Error: ', err); 
            return; 
        }
        console.log("List");
        res.json(paises);
    });

};

paisController.show = function(req, res)
{
    Pais.findOne({_id: req.params.id}).exec(function(err, pais)
    {
        if(err)
        { 
            console.log('Error: ', err); 
            return; 
        }
        console.log("Show");
        res.json(pais);
    }); 
};

paisController.save = function(req, res)
{
    var pais = new Pais(req.body);
    pais.save(function(err)
    {
        if(err)
        {
            console.log('Error: ', err); 
            return; 
        }
        console.log("Save");
        res.json("Save");
    });
};

paisController.update = function(req, res)
{
    Pais.findByIdAndUpdate(req.params.id, {$set: {
        nombre: req.body.nombre,
        abreviatura: req.body.abreviatura
    }}, {new: true},
    function(err, pais)
    {
        if(err)
        { 
            console.log('Error: ', err); 
            return;
        }
        console.log("Updated");
        res.json(pais);
    });
};

paisController.delete = function(req, res)
{
    Pais.remove({_id: req.params.id}, function(err)
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

module.exports = paisController;