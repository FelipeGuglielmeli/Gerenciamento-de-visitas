const router = require('express').Router()
const consultaController = require("../controllers/consultaControllers") //Requerendo o arquivo de controllers definido para esse modelo em especifico - partyController.js

router.route('/consultas')
    .post((req, res) => consultaController.create(req, res))

module.exports = router