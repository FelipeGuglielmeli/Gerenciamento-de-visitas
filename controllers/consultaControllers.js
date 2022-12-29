const ConsultaModel = require('../models/consulta')
const {Visita: VisitaModel} = require('../models/visita')

const consultaController = {
    
    create: async (req, res) => {
        try {
            const consulta = {
                dataInicial: req.body.dataInicial,
                dataFinal: req.body.dataFinal,
                valorHora: req.body.valorHora,
                visitas: await VisitaModel.find({
                    dataVisita: {
                        $gte: req.body.dataInicial,
                        $lte: req.body.dataFinal
                    }
                }).sort({ dataVisita: 'asc' })
            }

            consulta.horasTrabalhadas = consulta.visitas.reduce((soma, visita) => soma + visita.totalHoras, 0)
            consulta.valorTotal = (consulta.horasTrabalhadas * consulta.valorHora) //Calculando o valor final do relatorio baseado no valor da hora definido pelo usuario

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
    getOne: async (req, res) => {
        try {
            const id = req.params.id
            const consulta = await ConsultaModel.findById(id)

            if(!consulta){
                res.status(404).json({ msg: "Consulta não encontrada."})
                return
            }

            res.json(consulta)
        } catch (error) {
            console.log(error)
        }
    }
 }

module.exports = consultaController