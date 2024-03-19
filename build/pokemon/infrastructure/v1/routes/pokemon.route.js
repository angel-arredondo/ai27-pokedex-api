"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = require("express");
const pokemonUseCase_1 = require("../../../application/pokemonUseCase");
const pokemon_controller_1 = require("../../controller/pokemon.controller");
const validation_1 = require("../../utils/validation");
const URL_ROUTE = '/api/v1/pokemons/';
const createRouter = (repository) => {
    const route = (0, express_1.Router)();
    const pokemonUseCase = new pokemonUseCase_1.PokemonUseCase(repository);
    const pokemonController = new pokemon_controller_1.PokemonController(pokemonUseCase);
    route.get(URL_ROUTE, pokemonController.get);
    route.post(`${URL_ROUTE}:name`, validation_1.Validation.pokemonName, pokemonController.insert);
    route.delete(`${URL_ROUTE}:identifier`, validation_1.Validation.pokemonIdentifier, pokemonController.delete);
    return route;
};
exports.createRouter = createRouter;
