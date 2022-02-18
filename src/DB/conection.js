const mongoose = require('mongoose')

const DB_SERVER_URL = process.env.DB_SERVER_URL || "localhost";
const DB_PORT = process.env.DB_PORT || 10101;
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "spotifyApp";

let URI_CONNECTION= `mongodb://${DB_SERVER_URL}:${DB_PORT}/${DB_NAME}`;

if(DB_SERVER_URL !== "localhost"){// Si estoy en produccion
    URI_CONNECTION  = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_SERVER_URL}:${DB_PORT}/${DB_NAME}`;    
}

const dbConnect =async () => {
    try {
        await mongoose.connect(URI_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
        })
        console.log('**** CONEXION CORRECTA ****');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}
module.exports = { dbConnect}