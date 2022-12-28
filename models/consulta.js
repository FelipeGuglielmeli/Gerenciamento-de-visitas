const mongoose = require('mongoose')
const { Schema } = mongoose
const { VisitaSchema }  = require('./visita')

const ConsultaSchema = new Schema({
    data_inicial: {
        type: Date,
        required: true
    },
    data_final: {
        type: Date,
        required: true
    },
    valorHora : {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    visitas: {
        type: [VisitaSchema]
    }
})

const Consulta = mongoose.model("Consulta", ConsultaSchema)
module.exports = Consulta