import { Schema, models, model } from "mongoose";

const tareaSchema = new Schema({
  descripcion: {
    type: String,
  },
  user: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
});

export default model("Tarea", tareaSchema);
