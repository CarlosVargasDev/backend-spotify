const { httpError } = require('../../helpers/handleError.helper');
const { encrypt, compare } = require('../../helpers/bcrypt.helper');
const { crearToken } = require('../../helpers/token.helper');
const UserModel = require('../../../DB/models/users.model');

// TODO: Manejar el algoritmo de  
const loginCtrl = async (req, res) => {
    try {
        // Recibiendo data
        const { email, password } = req.body;

        // Verificamos usuario
        const usuario = await UserModel.findOne({email});
        if (!usuario) {
            // console.log("Usuario no encontrado");
            return res.status(401).send({ok:false,errors: {msg:`Email ${email} no encontrado`} });
        }
        
        // Verificamos password
        const checkPassword = await compare(password, usuario.password);
        if (!checkPassword) { 
            return res.status(401).send({
                ok:false,
                errors:[{msg:`Password incorrecta`}]
            })
        }

        // Generar token
        const token = await crearToken(usuario) 

        // Todo Ok
        if (checkPassword) {
            return res.status(200).send({ ok:true, data: usuario, token})
        }
        
    } catch (e) {
        httpError(res, e)
    }
}

const registerCtrl = async (req, res) => {
    try {
        // Recibiendo data
        const { email, password, name, fecha_nac,creadoPorEmail,creadoPorGoogle=false} = req.body
        
        // Encriptar password
        const passwordHash = await encrypt(password); 


        // Crear usuario en BD
        const registerUser = await UserModel.create({
            email,
            name,
            password: passwordHash,
            fecha_nac,
            creadoPorEmail,
            creadoPorGoogle
        })

        // Generar token
        const token = await crearToken(registerUser) 
        
        // Enviar respuesta
        res.status(200).send({ ok:true,data: registerUser, token })

    } catch (e) {
        httpError(res, e)
    }
}

const tokenCtrl = async (req,res) =>{
    // Si llego hasta aqui significa que el token es valido
    res.status(200).send({ ok:true })
}

module.exports = { loginCtrl, registerCtrl, tokenCtrl }