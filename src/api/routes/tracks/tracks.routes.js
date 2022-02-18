const express = require('express')
const router = express.Router()


// Controladores
const { getItems, getItem } = require('./tracks.controller')

// Middlewares
const { middlewaresGetTracks,middlewaresGetTrack } = require('./tracks.middleware'); 

// Obtenemos todas las canciones
router.get('/',middlewaresGetTracks, getItems)

// Obtener una cancion
router.get('/:id', middlewaresGetTrack , getItem)


module.exports = router