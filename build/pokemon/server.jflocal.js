"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_app_1 = require("./pokemon.app");
const jf_repository_1 = require("./infrastructure/repository/jf.repository");
const jfPokemonRepository = new jf_repository_1.JfRepository();
(0, pokemon_app_1.createApp)(jfPokemonRepository);
