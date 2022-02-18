const epxress = require('express')
const router = epxress.Router()
const fs = require('fs')


const list_routes = [
    {
        uri:'/auth',
        document: './routes/auth/auth.routes.js'
    },
    {
        uri:'/tracks',
        document: './routes/tracks/tracks.routes.js'
    }
    
];


const loadRoutes = ()=>{
    list_routes.forEach(ruta => {
        router.use(ruta.uri, require(ruta.document) ); 
        console.log('Rutas ---->',ruta.uri)
    });

    // 404
    router.get('*', (req, res) => {
        res.status(404).send({ error: 'Not found' })
    })
}

loadRoutes();

module.exports = router