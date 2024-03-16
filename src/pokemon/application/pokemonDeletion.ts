import { PokemonEntity } from "../domain/pokemon.entity";
import { PokemonRepository } from "../domain/pokemon.repository";
export class PokemonDeletion {
    constructor(private readonly pokemonRepository: PokemonRepository) {}

    public async deletePokemon(pokemon: PokemonEntity){
        const deletedPokemon = await this.pokemonRepository.deletePokemon(pokemon);
        return deletedPokemon;
    }
}