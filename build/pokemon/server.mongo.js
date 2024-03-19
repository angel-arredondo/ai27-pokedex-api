"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_repository_1 = require("./infrastructure/repository/mongo.repository");
const pokemon_app_1 = require("./pokemon.app");
const mongoPokemonRepository = new mongo_repository_1.MongoRepository();
(0, pokemon_app_1.createApp)(mongoPokemonRepository);
