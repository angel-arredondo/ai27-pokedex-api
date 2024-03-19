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
exports.MongoRepository = void 0;
const error_classes_1 = require("../utils/error.classes");
const pokemon_schema_1 = __importDefault(require("../model/pokemon.schema"));
const uuid_1 = require("uuid");
const labels_1 = require("../constants/labels");
class MongoRepository {
    registerPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPokemon = new pokemon_schema_1.default(pokemon);
                newPokemon._id = (0, uuid_1.v4)();
                yield newPokemon.save();
                return newPokemon;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.labels.errors.database.save} ${e instanceof Error ?
                    e.message : "unknown"}`);
            }
        });
    }
    deletePokemonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield pokemon_schema_1.default.deleteOne({ _id: id });
                return res.deletedCount;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.labels.errors.database.deleteId} ${e instanceof Error ?
                    e.message : "unknown"}`);
            }
        });
    }
    deletePokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield pokemon_schema_1.default.deleteOne({ name });
                return res.deletedCount;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.labels.errors.database.deleteName} ${e instanceof Error ?
                    e.message : "unknown"}`);
            }
        });
    }
    listPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = yield pokemon_schema_1.default.find({});
                return pokemons;
            }
            catch (e) {
                throw new error_classes_1.DatabaseError(`${labels_1.labels.errors.database.list} ${e instanceof Error ?
                    e.message : 'unknown'}`);
            }
        });
    }
}
exports.MongoRepository = MongoRepository;
