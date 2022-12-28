const mongoose = require('mongoose')
const { Schema } = mongoose
const { VisitaSchema }  = require('./visita')

const ConsultaSchema = new Schema({
    dataInicial: {
        type: Date,
        required: true
    },
    dataFinal: {
        type: Date,
        required: true
    },
    valorHora : {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    visitas: {
        type: [VisitaSchema]
    }
})

const Consulta = mongoose.model("Consulta", ConsultaSchema)
module.exports = Consulta