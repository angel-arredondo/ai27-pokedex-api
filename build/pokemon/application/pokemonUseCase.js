"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonUseCase = void 0;
const pokemon_value_1 = require("../domain/pokemon.value");
class PokemonUseCase {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }
    registerPokemon(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, moves, types }) {
            const pokemonValue = new pokemon_value_1.PokemonValue({
                name,
                moves,
                types
            });
            const createdPokemon = yield this.pokemonRepository
                .registerPokemon(pokemonValue);
            return createdPokemon;
        });
    }
    deletePokemonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPokemon = yield this.pokemonRepository.deletePokemonById(id);
            return deletedPokemon;
        });
    }
    deletePokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPokemon = yield this.pokemonRepository.deletePokemonByName(name);
            return deletedPokemon;
        });
    }
    listPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemons = yield this.pokemonRepository.listPokemon();
            return pokemons;
        });
    }
}
exports.PokemonUseCase = PokemonUseCase;
