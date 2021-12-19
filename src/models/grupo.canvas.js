import { Schema, model } from "mongoose";
import { TipoGrupo } from "../enums/tipo-grupo.enum";


const grupoSchema = new Schema({
    x: {
        type: Number,
    },
    y: {
        type: Number,
    },
    contenido: [{
        type: String,        
    }],
    ancho: {
        type: Number,
    },
    alto: {
        type: Number,
    },
    tipoGrupo: {
        type: String, 
        enum: TipoGrupo
    }
});
export default model("Grupo", grupoSchema);