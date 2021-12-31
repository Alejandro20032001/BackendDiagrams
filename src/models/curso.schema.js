import { Schema, model } from "mongoose";

const cursoSchema = new Schema({
  docente: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
  estudiantes: [
    {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
  ],
});

export default model("Curso", cursoSchema);
