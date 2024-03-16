import { PokemonEntity } from "./pokemon.entity";

export interface PokemonRepository {
    registerPokemon(pokemon:PokemonEntity): Promise<PokemonEntity | null>;
    deletePokemon(pokemon:PokemonEntity): Promise<PokemonEntity | null>;
    listPokemon(): Promise<PokemonEntity[] | null>;
}