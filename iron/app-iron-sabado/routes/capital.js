const express = require("express");
const router = express.Router();
const Capital = require("../models/Capital");
const auth = require("../helpers/auth");

//=========>     PONER MIDDLEWARE VERYFY.TOKEN "auth.verifyToken"
router.get("/",  (req, res )=>{
    Capital.find()
    .populate('_negocio')
    .then( capital => {
        res.status(200).json({capital})
    })
    .catch(err =>{
        res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
    })
})

router.post("/new", /*auth.verifyToken,*/ (req, res) =>{
        const newCapital = new Capital({
            _negocio: req.body._negocio,
            capital: req.body.capital,
            utEjAnterior: req.body.utEjAnterior,
            sumaCapital: req.body.capital + req.body.utEjAnterior
        });
        newCapital.save()
        .then(newCapital => {
            res.status(200).json({newCapital})
        })
        .catch(err =>{
            res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
        })
})

//READ
router.get("/:id", (req, res)=>{
    Capital.find({_negocio:req.params.id})
    .populate('_negocio')
    .then(capital =>{
        res.status(201).json({capital})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo leer"})
    })
})

//UPDATE
router.patch("/:id", (req, res) =>{
    Capital.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(capital =>{
            res.status(200).json({capital})
        })
        .catch(err =>{
            res.status(500).json({err, msg:"No se pudo actualizar"})
        })
})
//DELETE

router.delete("/:id", auth.verifyToken, (req, res)=> {
    Capital.findByIdAndDelete(req.params.id)
    .then(capital=>{
        res.status(200).json({capital})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo eliminar"})
    })
})

module.exports = router;