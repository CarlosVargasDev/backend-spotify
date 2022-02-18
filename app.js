require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./src/DB/conection')

// Obtenemos variables de entorno
const PORT = process.env.PORT || 3000
const URL_SERVER = process.env.URL_SERVER || "localhost";


dbConnect(); //Conectamos DB


app.use(cors()) //Usamos middleware CORS
app.use(express.json()) //Usamos middleware json
app.use(express.static('public')); //Servimos contenido estatico
app.use('/api/v1.0', require('./src/api/app.routes')) 

// Lanzamos el servidor
app.listen(PORT, () => {
    console.log(`Tu API es http://${URL_SERVER}:${PORT}/api/v1.0`)
})