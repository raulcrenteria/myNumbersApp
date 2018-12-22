const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activoSchema = new Schema ({
        _negocio: {
            type: Schema.Types.ObjectId,
            ref: "Negocio",
            required: "No hay Negocio"
        },
        efectivo: {
            type: Number, 
        },
        clientesdxcCP: {
            type: Number,
            
        },
        activoNoFinCorr: {
            type: Number,
            
        },
        inventariosCorrientes:{
            type: Number,
            
        },
        clientesdxcLP: {
            type: Number,
            
        },
        activoFinNoCorr: {
            type: Number,
            
        },
        inversiones: {
            type: Number,
            
        },
        propiedadesPlantasEquipo: {
            type: Number,
            
        },
        propiedadDeInversiones: {
            type: Number,
            
        },
        impuestosDiferidos: {
            type: Number,
            
        },

        sumaActivo:{
            type: Number,
        },   
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Activo", activoSchema);