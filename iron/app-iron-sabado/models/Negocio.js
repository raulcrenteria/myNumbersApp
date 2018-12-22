const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const negocioSchema = new Schema ({

    _owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    nombre: {
        type: String,
        required: true,

    },
    giro: {
        type: String,
        required: true,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Negocio", negocioSchema);