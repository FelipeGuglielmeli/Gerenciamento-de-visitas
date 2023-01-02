const {Visita: VisitaModel, VisitaSchema} = require('../models/visita')

const visitaController = {

    create: async (req, res) => {
        try {
            const visita = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                horaInicio: new Date(req.body.horaInicio),
                horaFinal: new Date(req.body.horaFinal),
                escritorio: req.body.escritorio,
                almoco: req.body.almoco,
                dataVisita: req.body.dataVisita,
            }

            visita.totalHoras = (visita.horaFinal - visita.horaInicio) / 3600000 //Calculando a diferenca entre a hora inicial e a hora final definida na visita

            if (visita.almoco == true) {
                visita.totalHoras--
            }
    
            if(visita.horaFinal < visita.horaInicio) {
                res.status(401).json({ msg: "Data inválida, hora final precisa ser maior que inicial." })
                return
            }

            const response = await VisitaModel.create(visita)
            res.status(201).json({ response, msg: "Visita registrada com sucesso." })
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const visitas = await VisitaModel.

            res.json(visitas)
        } catch (error) {
            console.log(error)
        }
    },
    getOne: async (req, res) => {
        try {
            const id = req.params.id
            const visita = await VisitaModel.findById(id)

            if(!visita){
                res.status(404).json({ msg: "Visita não encontrada."})
                return
            }

            res.json(visita)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const visita = await VisitaModel.findById(id)

            if(!visita){
                res.status(404).json({ msg: "Visita não encontrada."})
                return
            }

            const deletedVisita = await VisitaModel.findByIdAndDelete(id)
            res.status(200).json({ deletedVisita, msg: "Visita excluída com sucesso."}) 
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const visita = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                horaInicio: req.body.horaInicio,
                horaFinal: req.body.horaFinal,
                escritorio: req.body.escritorio,
                almoco: req.body.almoco
            }
            
            if(!visita){
                res.status(404).json({ msg: "Visita não encontrada."})
                return
            }

            const updatedVisita = await VisitaModel.findByIdAndUpdate(id, visita)

            if(!updatedVisita){
                res.status(404).json({ msg: "Visita não encontrada."})
                return
            }

            res.status(200).json({updatedVisita, msg: "Visita atualizada com sucesso."})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = visitaController