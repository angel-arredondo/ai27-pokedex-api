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
exports.PokeApiService = void 0;
const error_classes_1 = require("../utils/error.classes");
const fetch_1 = require("../utils/fetch");
const labels_1 = require("../constants/labels");
class PokeApiService {
    static getPokemonByName(pokemonName) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const result = yield fetch_1.Fetch.fetch((_a = `${process.env.POKE_API}${pokemonName}`) !== null && _a !== void 0 ? _a : "");
            if (!result.ok)
                throw new error_classes_1.PokeApiError(labels_1.labels.errors.pokeApi);
            const { name, moves, types } = yield result.json();
            const pokemon = {
                name,
                moves: moves.slice(0, 4).map((key) => {
                    return { name: key.move.name };
                }),
                types: types.map((key) => {
                    return { name: key.type.name };
                }),
            };
            return pokemon;
        });
    }
}
exports.PokeApiService = PokeApiService;
