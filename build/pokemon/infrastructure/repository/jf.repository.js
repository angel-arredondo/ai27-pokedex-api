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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JfRepository = void 0;
const labels_1 = __importDefault(require("../constants/labels"));
const error_classes_1 = require("../utils/error.classes");
const uuid_1 = require("uuid");
const jf_database_1 = require("../databases/jf.database");
const db_json_1 = __importDefault(require("../data/db.json"));
class JfRepository {
    registerPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemonToCreate = db_json_1.default.pokemons.find((p) => p.name === pokemon.name);
                if (pokemonToCreate)
                    return pokemonToCreate;
                const pokemons = (0, jf_database_1.getDbModel)();
                pokemon.id = (0, uuid_1.v4)();
                pokemons.insert(pokemon);
                const savedPokemon = pokemons.find({ id: pokemon.id });
                return savedPokemon !== null && savedPokemon !== void 0 ? savedPokemon : null;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.default.errors.database.save} ${e instanceof Error ? e.message : "unknown"}`);
            }
        });
    }
    deletePokemonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = (0, jf_database_1.getDbModel)();
                pokemons.remove({ id });
                return 1;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.default.errors.database.deleteId} ${e instanceof Error ?
                    e.message : "unknown"}`);
            }
        });
    }
    deletePokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = (0, jf_database_1.getDbModel)();
                const pokemon = db_json_1.default.pokemons.find((p) => p.name === name);
                if (!pokemon)
                    return 0;
                pokemons.remove({ id: pokemon.id });
                return 1;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.default.errors.database.deleteName} ${e instanceof Error ?
                    e.message : "unknown"}`);
            }
        });
    }
    listPokemon() {
        try {
            const pokemons = (0, jf_database_1.getDbModel)();
            return Array.from(pokemons);
        }
        catch (e) {
            throw new error_classes_1.DatabaseError(`${labels_1.default.errors.database.list} ${e instanceof Error ?
                e.message : "unknown"}`);
        }
    }
}
exports.JfRepository = JfRepository;
