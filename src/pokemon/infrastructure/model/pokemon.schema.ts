import { Schema, model } from "mongoose";

const NameSchema = new Schema({
    name: String
},{ _id:false })

const PokemonSchema = new Schema({
    _id: String,
    name:{ type: String, unique:true },
    moves:[NameSchema],
    types:[NameSchema]
},{ versionKey:false })

const PokemonModel = model('pokemons', PokemonSchema)
export default PokemonModel;
