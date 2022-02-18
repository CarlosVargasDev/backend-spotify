const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl,tokenCtrl } = require('./auth.controller');
const { midlewaresRegister,midlewaresLogin,middlewareToken } = require('./auth.middleware');



router.post('/verificaToken',middlewareToken,tokenCtrl)
router.post('/login', midlewaresLogin,loginCtrl)
router.post('/register', midlewaresRegister,registerCtrl)

// TODO: Implementar metodos de autenticaion Sociales
// router.post('/loginGoogle', [], registerCtrl)
// router.post('/registerGoogle', [], registerCtrl)

module.exports = router