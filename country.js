import mongoose from "mongoose"
let Schema = mongoose.Schema
const countrySchema = new Schema({
  name: String,
  capital: String,
  region: String,
  population: Number,
})

let model = mongoose.model
export default model('Country', countrySchema)