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
            default:0
        },
        clientesdxcCP: {
            type: Number,
            default:0
        },
        activoNoFinCorr: {
            type: Number,
            default:0
            
        },
        inventariosCorrientes:{
            type: Number,
            default:0
            
        },
        clientesdxcLP: {
            type: Number,
            default:0
            
        },
        activoFinNoCorr: {
            type: Number,
            default:0
            
        },
        inversiones: {
            type: Number,
            default:0
            
        },
        propiedadesPlantasEquipo: {
            type: Number,
            default:0
            
        },
        propiedadDeInversiones: {
            type: Number,
            default:0
            
        },
        impuestosDiferidos: {
            type: Number,
            default:0
            
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