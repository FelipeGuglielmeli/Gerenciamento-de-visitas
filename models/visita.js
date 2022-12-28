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
            type: String,
            required: true
        },
        horaFinal: {
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

 const Visita = mongoose.model('Visita', VisitaSchema)
 module.exports = {
    Visita,
    VisitaSchema
 }
