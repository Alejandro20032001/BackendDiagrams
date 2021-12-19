import { Schema, models, model } from 'mongoose'

const unionSchema = new Schema({
    claseOrigen:{
        ref: "Clase",
        type:Schema.Types.ObjectId,
    },
    claseFin: {
        ref: "Clase",
        type:Schema.Types.ObjectId,
    },
    tipoUnion:{
        type: Boolean   
    }
})

export default model("Union", unionSchema)