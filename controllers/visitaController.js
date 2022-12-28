const {Visita: VisitaModel} = require('../models/visita')

const visitaController = {

    create: async (req, res) => {
        try {
            const visita = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                horaInicio: req.body.horaInicio,
                horaFinal: req.body.horaFinal,
                escritorio: req.body.escritorio,
                almoco: req.body.almoco
            }

            const response = await VisitaModel.create(visita)
            res.status(201).json({ response, msg: "Visita registrada com sucesso." })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = visitaController