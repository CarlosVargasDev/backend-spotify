const mongoose = require('mongoose')

const DB_URI = process.env.DB_PORT;
const SERVER_IP = process.env.DB_SERVER;
const DB_NAME = "spotifyApp";
const URI_CONNECTION = `mongodb://${SERVER_IP}:${DB_URI}/${DB_NAME}`

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
