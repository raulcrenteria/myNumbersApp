const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pasivoSchema = new Schema({    
   
    _negocio: {
        type: Schema.Types.ObjectId,
        ref: "Negocio",
        required: "No hay Negocio"
    },
    proveedoresCxpCP:Number,
    deudasFinCP:Number,
    bonosyPapelesCP:Number,
    otrosCredConCosto:Number, 
    totalProvisionesCP:Number,
    pasivoPorImpuestosCorr:Number,
    proveedoresCxpLP:Number, 
    deudasFinLP:Number,
    bonosLP:Number,
    acreedoresVariosLP:Number,
    provisionesLP:Number,
    impuestosDiferidos:Number,
    sumaPasivo:Number,
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Pasivo", pasivoSchema)