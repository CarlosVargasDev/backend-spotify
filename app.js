require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./src/DB/conection')

// Obtenemos variables de entorno
const SERVER_PORT = process.env.SERVER_PORT || 3000
const SERVER_URL = process.env.SERVER_URL || "localhost";


dbConnect(); //Conectamos DB

app.use(cors()) //Usamos middleware CORS
app.use(express.json()) //Usamos middleware json
app.use(express.static('public')); //Servimos contenido estatico
app.use('/api/v1.0', require('./src/api/app.routes')) 

// Lanzamos el servidor
app.listen(SERVER_PORT, () => {
    console.log(`Tu API es http://${SERVER_URL}:${SERVER_PORT}/api/v1.0`)
})