import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    completeName: String,
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
export default model("User", userSchema);
