const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estadoResSchema = new Schema({
    ventas:{
        type: Number,
        required: true
    },

    costoVentas:{
        type: Number,
        required: true
    },

    utilidadBruta:{
        type: Number,
        required: true,
    },

    gastosAdmn:{
        type: Number,
        required: true
    },

    gastosOperativos:{
        type: Number,
        required: true,
    },

    gastosVentas:{
        type: Number,
        required: true,
    },
    utilidadOperativa:{
        type: Number,
        required: true,
    },
    gastosFinancieros:{
        type: Number,
        required: true,
    },
    ingresosFinancieros:{
        type: Number,
        required: true,
    },
    utilidadAntesImpuestos:{
        type: Number,
        required: true,
    },
    impuestos:{
        type: Number,
        required: true,
    },
    utilidadNeta:{
        type: Number,
        required: true,
    },
    _negocio: {
        type: Schema.Types.ObjectId,
        ref: "Negocio",
        required: "No hay Negocio"
    },
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("EstadoResultados", estadoResSchema);