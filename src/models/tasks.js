const { Schema, model, version} = require('mongoose')

const taskSchema = new Schema({
    titulo : {
        type : String,
        max : 50
    },

    descripcion : {
        type : String,
        require : true
    },
    
    estado : {
        type : String,
        require : true
    },

    active : {
        type : Boolean,
        default : true
    }
    // userId : {
    //     type : Schema.type.ObjectId.
    // }
},{
    versionKey: false,
    timestamps: true
}
)

module.exports = model('TaskModel', taskSchema)