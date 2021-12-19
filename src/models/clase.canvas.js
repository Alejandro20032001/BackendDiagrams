import { Schema, model } from "mongoose";
const claseSchema = new Schema({
  grupoNombre: {
    ref: "Grupo",
    type: Schema.Types.ObjectId,
  },
  grupoAtributos: {
    ref: "Grupo",
    type: Schema.Types.ObjectId,
  },
  grupoMetodos: {
    ref: "Grupo",
    type: Schema.Types.ObjectId,
  },
});

export default model("Clase", claseSchema);
