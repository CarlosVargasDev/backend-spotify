const { validationResult } = require('express-validator')

const {body} = require('express-validator');
const UserModel = require('../../../DB/models/users.model');

// ---------------------------------------------
// Middlewares Compartidos
// ---------------------------------------------
const { verificaToken} = require('../../helpers/token.helper'); 

// ---------------------------------------------
// Middlewares Personalizados
// ---------------------------------------------
const existeEmail = async(email="")=>{
    const existe = await UserModel.findOne({email})
    if( existe ){
        throw new Error("Este email ya ha sido registrado");
    }
}
const lanzarMsgValidaciones = async(req,res,next)=> {
    const errors = validationResult(req); //obtenemos los errores.
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:[...errors.errors]
        });
    }
    next();
}

// ---------------------------------------------
// Middlewares Register
// ---------------------------------------------
const midlewaresRegister = [
    body('name', 'El nombre es obligatorio').not().isEmpty(),
    body('fecha_nac', 'La fecha de nacimiento debe ser de tipo Date').isDate(),
    body('email', 'El email no es valido').isEmail().normalizeEmail(),
    body('password', 'El password debe ser ser de almenos 6 caracteres ').isLength({min:6}),
    body('creadoPorEmail', 'El campo creadoPorEmail debe de ser un booleano').isBoolean(),
]
midlewaresRegister.push(body('email').custom(existeEmail));
midlewaresRegister.push(lanzarMsgValidaciones);


// ---------------------------------------------
// Middlewares Login
// ---------------------------------------------
const midlewaresLogin = [
    body('email', 'El email no es valido').isEmail().normalizeEmail(),
    body('password', 'El password debe ser ser de almenos 6 caracteres ').isLength({min:6}),
];
midlewaresRegister.push(lanzarMsgValidaciones);


// ---------------------------------------------
// Middlewares Token
// ---------------------------------------------
const middlewareToken = [verificaToken];

module.exports = {
    midlewaresRegister,
    midlewaresLogin,
    middlewareToken
}