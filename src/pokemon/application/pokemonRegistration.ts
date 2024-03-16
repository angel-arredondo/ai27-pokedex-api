import { PokemonRepository } from "../domain/pokemon.repository";
import { PokemonValue } from "../domain/pokemon.value";
import { PokemonEntity } from "../domain/pokemon.entity";

export class PokemonRegistration {
    constructor(private readonly pokemonRepository: PokemonRepository) {}

    public async registerPokemon({
        name, 
        moves, 
        types
    }: Omit<PokemonEntity,"uuid">) {
        const pokemonValue = new PokemonValue({
            name,
            moves,
            types
        });

        const createdPokemon = await this.pokemonRepository
            .registerPokemon(pokemonValue);
        
        return createdPokemon;
    }
}