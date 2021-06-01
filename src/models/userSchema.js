import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  name: { type: String },
  count: {type: Number, default: 0}
})

export default model('User', userSchema);