const bcrypt = require('bcryptjs')

// Encriptamos!!
const encrypt = async (textPlain,salt=10) => { 
    const hash = await bcrypt.hash(textPlain, salt) 
    return hash
}

// Comparamos!!
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword).then((res)=>{return res})

    
}

module.exports = { encrypt, compare }