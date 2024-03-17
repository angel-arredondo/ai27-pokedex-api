import { PokemonRepository } from "../domain/pokemon.repository";
import { PokemonValue } from "../domain/pokemon.value";
import { PokemonEntity } from "../domain/pokemon.entity";

export class PokemonUseCase {
    constructor(private readonly pokemonRepository: PokemonRepository) {}

    public async registerPokemon({
        name, 
        moves, 
        types
    }: Omit<PokemonEntity,"id">) {
        //console.log("fromUseCase PokemonRegistration params", {name,moves,types});
        const pokemonValue = new PokemonValue({
            name,
            moves,
            types
        });
        //console.log("fromUseCase PokemonRegistration to save", pokemonValue);
        const createdPokemon = await this.pokemonRepository
            .registerPokemon(pokemonValue);
        
        return createdPokemon;
    }

    public async deletePokemonById(id:string) {
        const deletedPokemon = await this.pokemonRepository.deletePokemonById(id)
        return deletedPokemon
    }

    public async deletePokemonByName(name:string) {
        const deletedPokemon = await this.pokemonRepository.deletePokemonByName(name)
        return deletedPokemon
    }

    public async listPokemon() {
        const pokemons = await this.pokemonRepository.listPokemon();
        return pokemons
    }
}