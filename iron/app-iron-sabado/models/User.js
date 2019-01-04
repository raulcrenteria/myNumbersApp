const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstName:{    
        type: String,
        required: true
    },
    firstLastName:{
        type: String,
        required: true
    },
    secondLastName:{
        type: String,
        
    },
    birthday:{
        type: Date,
        
    },
    rfc:{
        type: String,
        required: true,
        unique: true,
        maxlength: 13,
    },
    curp:{
        type: String,
        maxlength: 18,
        

    },
    phoneNumber:{
        type: Number,
        unique: true,
        maxlength: 10,
    },

    facebookUrl:{
        type: String,
    },
    instagramUrl:{
        type: String,
    },
    twitterUrl:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profile_picture: String,
    }, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("User", userSchema);