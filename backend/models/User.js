import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  firstName: { type: String },
  lastName: { type: String },
  avatar: { type: String },
  savedList: [{}],
});

export const User = model("User", userSchema);
