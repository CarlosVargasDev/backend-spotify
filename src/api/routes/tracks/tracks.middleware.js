const { validationResult } = require('express-validator')
const {body} = require('express-validator');

// Otros Middlewares
const { verificaToken} = require('../../helpers/token.helper');


const middlewaresGetTracks =[
    verificaToken
];
const middlewaresGetTrack =[
    // verificaToken
];



module.exports = {
    middlewaresGetTracks,
    middlewaresGetTrack
}