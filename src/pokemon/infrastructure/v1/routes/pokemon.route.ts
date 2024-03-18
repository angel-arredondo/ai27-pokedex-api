import { Router } from "express";
import { PokemonUseCase } from "../../../application/pokemonUseCase";
import { PokemonController } from "../../controller/pokemon.controller";
import { MongoRepository } from "../../repository/mongo.repository";
import { Validation } from "../../utils/validation";

const URL_ROUTE = '/api/v1/pokemon/'

const route = Router()

const mongoPokemonRepository = new MongoRepository();
const pokemonUseCase = new PokemonUseCase(mongoPokemonRepository);
const pokemonController = new PokemonController(pokemonUseCase);

route.get(URL_ROUTE,pokemonController.get)
route.post(
    `${URL_ROUTE}:name`, 
    Validation.pokemonName,
    pokemonController.insert
)
route.delete(
    `${URL_ROUTE}:identifier`, 
    Validation.pokemonIdentifier,
    pokemonController.delete
)

export default route