const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    name : {
        type : String,
        max : 50
    },

    email : {
        type : String,
        require : true
    },
    
    password : {
        type : String,
        require : true
    },

    active : {
        type : Boolean,
        default : true
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('UserModel', userSchema)