import { Schema, models, model } from 'mongoose'

const unionSchema = new Schema({
    descripcion:{
        type:String,
    },
    user: {
        ref: "User",
        type:Schema.Types.ObjectId,
    }
})

export default model("Tarea", unionSchema)