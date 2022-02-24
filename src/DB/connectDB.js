const mongoose = require('mongoose')

const { PROD_URI_CONNECTION,DEV_URI_CONNECTION }  = require('./helpers/connectDB.helper');

const dbConnect =async (mode = "PROD") => {
    const URI_CONNECTION = (mode == "PROD")? PROD_URI_CONNECTION: DEV_URI_CONNECTION; 
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