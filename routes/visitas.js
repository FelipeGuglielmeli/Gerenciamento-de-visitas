const router = require('express').Router()
const visitaController = require("../controllers/visitaController")

router.route('/visitas').post((req, res) => visitaController.create(req, res))

module.exports = router