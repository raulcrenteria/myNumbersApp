const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const capitalSchema = new Schema({
    _negocio: {
        type: Schema.Types.ObjectId,
        ref: "Negocio",
        required: "No hay Negocio"
    },
    capital: {
        type: Number,
        
    },
    utEjAnterior:{
        type: Number,
        

    },
    sumaCapital:{
        type: Number,

    }

},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Capital", capitalSchema);