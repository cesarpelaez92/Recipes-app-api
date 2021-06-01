import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  recipeName: { type: String, required: true },
  preparationTime: Number,
  preparationDesc: String,
  ingredients: String,
  Image: String
})

export default model('Recipe', recipeSchema);