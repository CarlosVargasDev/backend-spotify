const jwt = require('jsonwebtoken') 

const crearToken = async (user) => {     
    return new Promise( (resolve, reject)=>{
        const payload = {
            _id: user._id,
            role: user.role
        }
        const duration = {
            expiresIn: "2h",
        }

        jwt.sign(payload, process.env.JWT_SECRET, duration,
            (err, token)=>{
                if(err){ console.log("No se pudo crear el token: ",err);  reject('No se pudo generar el token')}
                
                else{ resolve(token);}
            });

    })
}

const checkToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}


const verificaToken = async(req, res, next) => {
    try {
        //Obtenemos  del header, authorization: "Bearer token" 
        const token = req.headers.authorization.split(' ').pop() //Seramos el token:1 token
        const valido = await checkToken(token)
        if (valido) {
            next()
        } else {
            res.status(401).send({ ok:false,error: 'Token no es valido' })
        }

    } catch (e) {
        res.status(401).send({ ok:false,error: 'Token no es valido' })
    }

}

module.exports = { crearToken, verificaToken }