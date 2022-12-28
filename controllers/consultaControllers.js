const ConsultaModel = require('../models/consulta')

const consultaController = {
    
    create: async (req, res) => {
        try {
            const consulta = {
                dataInicial: req.body.dataInicial,
                dataFinal: req.body.dataFinal,
                valorHora: req.body.valorHora,
                visitas: req.body.visitas
            }

            if(consulta.dataFinal < consulta.dataInicial) {
                res.status(401).json({msg: "Data inválida, data final precisa ser maior que inicial."})
                return
            }

            const response = await ConsultaModel.create(consulta)
            res.status(200).json({response, msg: "Consulta gerada com sucesso."})
        } catch (error) {
            console.log(error)
        }
    },
    getInterval: async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
 }

module.exports = consultaController