import { PokemonEntity } from "../../domain/pokemon.entity";
import { PokemonRepository } from "../../domain/pokemon.repository";
import PokemonModel from "../model/pokemon.schema";
import { v4 as uuidd } from 'uuid';

export class MongoRepository implements PokemonRepository{
    async registerPokemon(pokemon:PokemonEntity): Promise<PokemonEntity | null> {
       // console.log("pokemon from MongoRepository ", pokemon)
        const newPokemon = new PokemonModel(pokemon);
        newPokemon._id = uuidd()
        console.log(newPokemon._id)
        await newPokemon.save();
        return newPokemon as PokemonEntity
    }
    async deletePokemonById(id:string): Promise<number> {
        console.log('deleting by id ', id)
        const res = await PokemonModel.deleteOne({ _id:id })
        return res.deletedCount
        
    }
    async deletePokemonByName(name: string): Promise<number> {
        console.log('deleting by name ', name)

        const res = await PokemonModel.deleteOne({ name })
        return res.deletedCount
    }
    async listPokemon(): Promise<PokemonEntity[] | null> {
       const pokemons = await  PokemonModel.find({});
       return pokemons as PokemonEntity[]
    }
}