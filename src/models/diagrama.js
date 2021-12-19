import { Schema, model } from "mongoose";

const diagramaSchema = new Schema({
  clases: [
    {
      ref: "Clase",
      type: Schema.Types.ObjectId,
    },
  ],
  uniones: [
    {
      ref: "Union",
      type: Schema.Types.ObjectId,
    },
  ],
  nombreDiagrama: {
    type: String,
  },
});

export default model("Diagrama", diagramaSchema);
