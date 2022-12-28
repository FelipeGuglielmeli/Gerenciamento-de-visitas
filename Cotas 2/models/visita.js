const mongoose = require('mongoose')

const VisitaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String
        },
        descricao: {
            type: String,
            required: true
        },
        data_visita: {
            type: Date,
            required: true,
            default: Date.now
        },
        hora_inicio: {
            type: String,
            required: true
        },
        hora_final: {
            type: String,
            required: true
        },
        escritorio: {
            type: Boolean,
            default: false
        },
        almoco: {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('Visita', VisitaSchema)

