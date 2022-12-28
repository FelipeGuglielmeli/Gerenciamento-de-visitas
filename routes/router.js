const router = require('express').Router()

const visitaRouter = require('./visitas') //Recebendo as duas rotas criadas para essa aplicação, unificando-as num unico arquivo a ser importado para o app.js
const consultaRouter = require('./consultas')

router.use('/', visitaRouter)
router.use('/', consultaRouter)

module.exports = router