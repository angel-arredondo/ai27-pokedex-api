"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NameSchema = new mongoose_1.Schema({
    name: String
}, { _id: false });
const PokemonSchema = new mongoose_1.Schema({
    _id: String,
    name: { type: String, unique: true },
    moves: [NameSchema],
    types: [NameSchema]
}, { versionKey: false });
const PokemonModel = (0, mongoose_1.model)('pokemons', PokemonSchema);
exports.default = PokemonModel;
