import { PokemonEntity } from "./pokemon.entity";

export interface PokemonRepository {
    registerPokemon(pokemon:PokemonEntity): Promise<PokemonEntity | null>;
    deletePokemonById(id:string): Promise<number>;
    deletePokemonByName(name:string): Promise<number>;
    listPokemon(): Promise<PokemonEntity[] | null>;
}