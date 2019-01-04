const express = require("express");
const router = express.Router();
const Activo = require("../models/Activo");
const auth = require("../helpers/auth");

//=========>     PONER MIDDLEWARE VERYFY.TOKEN "auth.verifyToken"
router.get("/",  (req, res )=>{
    Activo.find()
    .populate('_negocio')
    .then( activo => {
        res.status(200).json({activo})
    })
    .catch(err =>{
        res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
    })
})

router.post("/new", /*auth.verifyToken,*/ (req, res) =>{
        const newActivo = new Activo({
            _negocio: req.body._negocio,
            //cuentas del activo
          
/* 

efectivo
clientesdxcCP: {
activoNoFinCorr: {
inventariosCorrientes:{
clientesdxcLP: {
activoFinNoCorr: {
inversiones: {
propiedadesPlantasEquipo: {
propiedadDeInversiones: {
impuestosDiferidos: {
sumaActivo

*/

            efectivo: req.body.efectivo,
            clientesdxcCP: req.body.clientesdxcCP,
            activoNoFinCorr: req.body.activoNoFinCorr,
            inventariosCorrientes: req.body.inventariosCorrientes,
            clientesdxcLP: req.body.clientesdxcLP,
            activoFinNoCorr: req.body.activoFinNoCorr,
            inversiones: req.body.inversiones,
            propiedadesPlantasEquipo: req.body.propiedadesPlantasEquipo,





            sumaActivo: req.body.efectivo + req.body.clientesdxcCP + req.body.activoNoFinCorr + req.body.inventariosCorrientes + req.body.clientesdxcLP + req.body.activoFinNoCorr + req.body.inversiones + req.body.propiedadesPlantasEquipo//SUMA FINAL, TODAS LAS CUENTAS          
        });
        newActivo.save()
        .then(newActivo => {
            res.status(200).json({newActivo})
        })
        .catch(err =>{
            res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
        })
})

//READ
router.get("/:id", (req, res)=>{
    Activo.findById(req.params.id)
    .populate('_negocio')
    .then(activo =>{
        res.status(201).json({activo})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo leer"})
    })
})

//UPDATE
router.patch("/:id", (req, res) =>{
    Activo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(activo =>{
            res.status(200).json({activo})
        })
        .catch(err =>{
            res.status(500).json({err, msg:"No se pudo actualizar"})
        })
})
//DELETE

router.delete("/:id", auth.verifyToken, (req, res)=> {
    Activo.findByIdAndDelete(req.params.id)
    .then(activo=>{
        res.status(200).json({activo})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo eliminar"})
    })
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

module.exports = router;