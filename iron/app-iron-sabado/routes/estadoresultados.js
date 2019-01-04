const express = require("express");
const router = express.Router();
const EstadoResultados = require("../models/EstadoResultados");
const auth = require("../helpers/auth");

//=========>     PONER MIDDLEWARE VERYFY.TOKEN "auth.verifyToken"
router.get("/",  (req, res )=>{
  EstadoResultados.find()
    .populate('_negocio')
    .then( estadoresultados => {
        res.status(200).json({estadoresultados})
    })
    .catch(err =>{
        res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
    })
})

router.post("/new", auth.verifyToken, (req, res) =>{
        const newEstadoResultados = new EstadoResultados({
            _negocio: req.body._negocio,
            //cuentas del estado de resultados
/* 

ventas: req.body.ventas,
  costoVentas: req.body.costoVentas,
utilidadBruta: req.body.ventas - req.body.costoVentas,
  gastosAdmn: req.body.gastosAdmn,
  gastosOperativos: req.body.gastosOperativos,
  gastosVentas: req.body.gastosVentas,
utilidadOperativa: utilidadBruta - req.body.gastosAdmn - req.body.gastosOperativos - req.body.gastosVentas,
  gastosFinancieros: req.body.gastosFinancieros,
  ingresosFinancieros: req.body.ingresosFinancieros,
utilidadAntesImpuestos: utilidadOperativa - req.body.gastosFinancieros + req.body.ingresosFinancieros,
  impuestos: utilidadAntesImpuestos * .3,
utilidadNeta:  utilidadAntesImpuestos - impuestos

*/

ventas: req.body.ventas,
  costoVentas: req.body.costoVentas,
utilidadBruta: req.body.ventas - req.body.costoVentas,
  gastosAdmn: req.body.gastosAdmn,
  gastosOperativos: req.body.gastosOperativos,
  gastosVentas: req.body.gastosVentas,
utilidadOperativa: utilidadBruta - req.body.gastosAdmn - req.body.gastosOperativos - req.body.gastosVentas,
  gastosFinancieros: req.body.gastosFinancieros,
  ingresosFinancieros: req.body.ingresosFinancieros,
utilidadAntesImpuestos: utilidadOperativa - req.body.gastosFinancieros + req.body.ingresosFinancieros,
  impuestos: utilidadAntesImpuestos * .3,
utilidadNeta:  utilidadAntesImpuestos - impuestos
});
newEstadoResultados.save()
.then(newEstadoResultados => {
    res.status(200).json({newEstadoResultados})
})
.catch(err =>{
    res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
})
})

//READ
router.get("/:id", (req, res)=>{
EstadoResultados.findById(req.params.id)
.populate('_negocio')
.then(estadoresultados =>{
res.status(201).json({estadoresultados})
})
.catch(err =>{
res.status(500).json({err, msg:"No se pudo leer"})
})
})

//UPDATE
router.patch("/:id", (req, res) =>{
EstadoResultados.findByIdAndUpdate(req.params.id, req.body, {new: true})
.then(estadoresultados =>{
    res.status(200).json({estadoresultados})
})
.catch(err =>{
    res.status(500).json({err, msg:"No se pudo actualizar"})
})
})
//DELETE

router.delete("/:id", auth.verifyToken, (req, res)=> {
EstadoResultados.findByIdAndDelete(req.params.id)
.then(estadoresultados=>{
res.status(200).json({estadoresultados})
})
.catch(err =>{
res.status(500).json({err, msg:"No se pudo eliminar"})
})
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

module.exports = router;