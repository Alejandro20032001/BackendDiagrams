import { Schema, model } from 'mongoose'

const respuestaSchema = new Schema({
    diagrama:{
        ref: "Diagrama",
        type:Schema.Types.ObjectId,
    },
    estudiante: {
        ref: "User",
        type:Schema.Types.ObjectId,
    },
    tarea:{
        ref: "Tarea",
        type:Schema.Types.ObjectId,
    }
})

export default model("Respuesta", respuestaSchema)