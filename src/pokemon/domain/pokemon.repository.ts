import { PokemonEntity } from "./pokemon.entity";

export interface PokemonRepository {
    savePokemonByName(name:string):Promise<PokemonEntity | null>;
    deletePokemonById(id:string):Promise<Response>;
    deletePokemonByName(name:string):Promise<Response>;
    listPokemon():Promise<PokemonEntity[] | null>;
}