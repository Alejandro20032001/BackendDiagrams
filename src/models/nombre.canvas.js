import { Schema, model } from "mongoose";
const nombreSchema = new Schema({
    x: {
        type: Number,
    },
    y: {
        type: Number,
    },
    nombre: {
        type: String,
    },
    ancho: {
        type: Number,
    },
    alto: {
        type: Number,
    },
});
export default model("NombreClase", nombreSchema);