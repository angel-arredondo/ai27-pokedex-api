import { Router } from "express";
import { PokemonUseCase } from "../../../application/pokemonUseCase";
import { PokemonController } from "../../controller/pokemon.controller";
import { MongoRepository } from "../../repository/mongo.repository";
const URL_ROUTE = '/api/v1/'

const route = Router()

const mongoPokemonRepository = new MongoRepository();
const pokemonUseCase = new PokemonUseCase(mongoPokemonRepository);
const pokemonController = new PokemonController(pokemonUseCase);

route.get(URL_ROUTE,pokemonController.get)
route.post(`${URL_ROUTE}:name`, pokemonController.insert)
route.delete(`${URL_ROUTE}:identifier`, pokemonController.delete)

export default route