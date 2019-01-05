const express = require("express");
const router = express.Router();
const Pasivo = require("../models/Pasivo");
const auth = require("../helpers/auth");

//=========>     PONER MIDDLEWARE VERYFY.TOKEN "auth.verifyToken"
router.get("/",  (req, res)=>{
    Pasivo.find()
    .populate('_negocio')
    .then( pasivo => {
        res.status(200).json({pasivo})
    })
    .catch(err =>{
        res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
    })
})



router.post("/new", (req, res) =>{
        const newPasivo = new Pasivo({
            _negocio: req.body._negocio,
            
            proveedoresCxpCP: req.body.proveedoresCxpCP,
            deudasFinCP: req.body.deudasFinCP,
            bonosyPapelesCP: req.body.bonosyPapelesCP,
            otrosCredConCosto: req.body.otrosCredConCosto,
            totalProvisionesCP: req.body.totalProvisionesCP,
            pasivoPorImpuestosCorr: req.body.pasivoPorImpuestosCorr,
        //pasivo No Circulante
        
        //1
            proveedoresCxpLP: req.body.proveedoresCxpLP,
        //2    
            deudasFinLP: req.body.deudasFinLP,
            bonosLP: req.body.bonosLP,
            acreedoresVariosLP: req.body.acreedoresVariosLP,
        //3
            provisionesLP: req.body.provisionesLP,
        //4
            impuestosDiferidos: req.body.impuestosDiferidos,
            sumaPasivo: 
                    req.body.proveedoresCxpCP + 
                    req.body.deudasFinCP + 
                    req.body.bonosyPapelesCP + 
                    req.body.otrosCredConCosto +
                    req.body.totalProvisionesCP +
                    req.body.pasivoPorImpuestosCorr +
                    req.body.proveedoresCxpLP + 
                    req.body.deudasFinLP + 
                    req.body.bonosLP + 
                    req.body.acreedoresVariosLP +
                    req.body.provisionesLP +
                    req.body.impuestosDiferidos






       
            



            //capital: req.body.capital,
            //utEjAnterior: req.body.utEjAnterior,
            //sumaCapital: req.body.capital + req.body.utEjAnterior
               
        });
        newPasivo.save()
        .then(newPasivo => {
            res.status(200).json({newPasivo})
        })
        .catch(err =>{
            res.status(404).json({err, msg:"No hay sesión de usuario iniciada"})
        })
})

//READ
router.get("/:id", (req, res)=>{
    Pasivo.find({_negocio:req.params.id})
    .populate('_negocio')
    .then(pasivo =>{
        res.status(201).json({pasivo})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo leer"})
    })
})

//UPDATE
router.patch("/:id", (req, res) =>{
    Pasivo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(pasivo =>{
            res.status(200).json({pasivo})
        })
        .catch(err =>{
            res.status(500).json({err, msg:"No se pudo actualizar"})
        })
})
//DELETE

router.delete("/:id", auth.verifyToken, (req, res)=> {
    Pasivo.findByIdAndDelete(req.params.id)
    .then(pasivo=>{
        res.status(200).json({pasivo})
    })
    .catch(err =>{
        res.status(500).json({err, msg:"No se pudo eliminar"})
    })
})

module.exports = router;