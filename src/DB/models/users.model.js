const { Schema, model} = require('mongoose');


const UserScheme = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    fecha_nac: {
        type: Date,
        required: [true, "La fecha de nacimiento es obligatoria"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "El email es obligatorio"]
    },
    rol: {
        type: String,
        // required: [true,"El rol del usuario es requerido"],
        default: 'USER_ROLE'
    },
    img:{
        type: String
    },
    creadoPorEmail:{
        type: Boolean,
        default: true
    },
    creadoPorGoogle:{
        type: Boolean,
        default: false
    }
    
},
{
    timestamps: true,
    versionKey: false
})


UserScheme.methods.toJSON = function(){
    const { password, createdAt,updatedAt,_id,...user}  = this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', UserScheme)