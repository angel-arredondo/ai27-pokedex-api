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
exports.PokemonController = void 0;
const pokeapi_service_1 = require("../services/pokeapi.service");
const express_validator_1 = require("express-validator");
const labels_1 = require("../constants/labels");
const validation_1 = require("../utils/validation");
class PokemonController {
    constructor(pokemonUseCase) {
        this.pokemonUseCase = pokemonUseCase;
        this.ERRORS_HANDLING = Object.freeze({
            DatabaseError: (res) => res.status(500).send(labels_1.labels.responses.internalError),
            FetchError: (res) => res.status(500).send(labels_1.labels.responses.internalError),
            PokeApiError: (res) => res.status(404).send(labels_1.labels.responses.notFound),
        });
        this.get = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = yield this.pokemonUseCase.listPokemon();
                res.status(200).send({ pokemons });
            }
            catch (e) {
                if (e instanceof Error) {
                    const errorHandler = this.ERRORS_HANDLING[e.name];
                    return errorHandler
                        ? errorHandler(res)
                        : res.status(500).send(labels_1.labels.responses.unknown);
                }
                res.status(500).send(labels_1.labels.responses.unknown);
            }
        });
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }
            const { name } = req.params;
            try {
                const newPokemon = yield pokeapi_service_1.PokeApiService.getPokemonByName(name);
                const registeredPokemon = yield this.pokemonUseCase.registerPokemon(newPokemon);
                res.status(201).send({ registeredPokemon });
            }
            catch (e) {
                if (e instanceof Error) {
                    const errorHandler = this.ERRORS_HANDLING[e.name];
                    return errorHandler
                        ? errorHandler(res)
                        : res.status(500).send(labels_1.labels.responses.unknown);
                }
                res.status(500).send(labels_1.labels.responses.unknown);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                res.status(400).send({ errors: errors.array() });
            }
            const { identifier } = req.params;
            const isIdentifierId = validation_1.Validation.isUUID(identifier);
            try {
                const deletedCount = isIdentifierId
                    ? yield this.pokemonUseCase.deletePokemonById(identifier)
                    : yield this.pokemonUseCase.deletePokemonByName(identifier);
                res.status(200).send({ deletedCount });
            }
            catch (e) {
                console.log(e);
                if (e instanceof Error) {
                    const errorHandler = this.ERRORS_HANDLING[e.name];
                    return errorHandler
                        ? errorHandler(res)
                        : res.status(500).send(labels_1.labels.responses.unknown);
                }
                res.status(500).send(labels_1.labels.responses.unknown);
            }
        });
    }
}
exports.PokemonController = PokemonController;
