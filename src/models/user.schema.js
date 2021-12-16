import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    completeName: {
      type: String,
      unique: false,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      //select: false,
    },
    roles:[{
      ref: 'Role',
      type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
  }
);

userSchema.statics.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
};

userSchema.statics.validatePass = async (password, receivedPass) => {
  return await bcrypt.compare(password, receivedPass)
};

export default model("User", userSchema);
