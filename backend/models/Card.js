import mongoose, { Schema, model } from "mongoose";

const cardSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  username: { type: String },
  address: {},
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Card = model("Card", cardSchema);
