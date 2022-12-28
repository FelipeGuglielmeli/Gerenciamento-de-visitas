const router = require('express').Router()
const visitaController = require("../controllers/visitaController")

router.route('/visitas')
    .post((req, res) => visitaController.create(req, res))
    .get((req, res) => visitaController.getAll(req, res))

router.route('/visitas/:id')
    .get((req, res) => visitaController.getOne(req, res))
    .put((req, res) => visitaController.update(req, res))

module.exports = router