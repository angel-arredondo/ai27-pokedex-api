import { Router } from "express";
import { PokemonUseCase } from "../../../application/pokemonUseCase";
import { PokemonController } from "../../controller/pokemon.controller";
import { MongoRepository } from "../../repository/mongo.repository";
import { Validation } from "../../utils/validation";
import { JfRepository } from "../../repository/jf.repository";

const URL_ROUTE = '/api/v1/pokemons/'

export const createRouter = (repository:JfRepository | MongoRepository) =>{
    const route = Router()
  
    const pokemonUseCase = new PokemonUseCase(repository);
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
    
    return route
}
