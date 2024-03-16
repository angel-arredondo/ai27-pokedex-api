import { PokemonRepository } from "../domain/pokemon.repository";
export class PokemonList {
    constructor(private readonly pokemonRepository: PokemonRepository) {}

    public async listPokemon(){
        const pokemons = await this.pokemonRepository.listPokemon();
        return pokemons;
    }
}