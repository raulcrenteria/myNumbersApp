const express = require("express");
const router = express.Router();
const Negocio = require("../models/Negocio");
const auth = require("../helpers/auth");

// auth.verifyToken ->  poner despues de middle word 
router.get("/", (req, res )=>{
    Negocio.find()
    .populate('_owner')
    .then( negocios => {
        res.status(200).json({negocios})
    })
    .catch(err =>{
        res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
    })
})

router.post("/new", (req, res )=>{
        const newNegocio = new Negocio({
        _owner: req.body._owner,
        nombre: req.body.nombre,
        giro: req.body.giro,   
        });
        newNegocio.save()
        .then(newNegocio => {
            res.status(200).json({newNegocio})
        })
        .catch(err =>{
            res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
        })
})

router.get("/:id", (req, res)=>{
    Negocio.findById(req.params.id)
    .populate('_owner')
    .then(negocio =>{
        res.status(201).json({negocio})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo leer"})
    })
})

router.patch("/:id", (req, res)=>{
    Negocio.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(negocio =>{
            res.status(200).json({negocio})
        })
        .catch(err =>{
            res.status(500).json({err, msg:"No se pudo actualizar"})
        })
})

router.delete("/:id", auth.verifyToken, (req, res)=> {
    Negocio.findByIdAndDelete(req.params.id)
    .then(negocio=>{
        res.status(200).json({negocio})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo eliminar"})
    })
})

module.exports = router;