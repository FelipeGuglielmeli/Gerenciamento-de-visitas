const mongoose = require('mongoose')
const { Schema } = mongoose

const VisitaSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        dataVisita: {
            type: Date,
            default: Date.now
        },
        horaInicio: {
            type: Date,
            required: true
        },
        horaFinal: {
            type: Date,
            required: true
        },
        escritorio: {
            type: Boolean,
            default: false
        },
        almoco: {
            type: Boolean,
            default: false
        },
        totalHoras: {
            type: Number
        }
    }
)

 const Visita = mongoose.model('Visita', VisitaSchema)
 module.exports = {
    Visita,
    VisitaSchema
 }
