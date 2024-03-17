import { PokemonUseCase } from "../../application/pokemonUseCase";
import { Request, Response } from "express";
import { PokeApiService } from "../services/pokeapi.service";
export class PokemonController {
    constructor(private pokemonUseCase: PokemonUseCase){

    }

    public get = async(_req: Request, res: Response) => {
        const pokemons = await this.pokemonUseCase.listPokemon();
        res.status(200).send({ pokemons })
    }
    public insert = async(req: Request, res: Response) => {
        const { name } = req.params;
        const newPokemon = await PokeApiService.getPokemonByName(name)
        
        const registeredPokemon = await this.pokemonUseCase
            .registerPokemon(newPokemon);

        res.status(201).send({ registeredPokemon })
    }

    public delete = async (req: Request, res: Response) => {
        const { identifier } = req.params
    
        const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        const isIdentifierId = regex.test(identifier)

        const deletedCount = isIdentifierId ? 
            await this.pokemonUseCase.deletePokemonById(identifier) : 
            await this.pokemonUseCase.deletePokemonByName(identifier)
        
        res.status(201).send({ deletedCount })

    }
}