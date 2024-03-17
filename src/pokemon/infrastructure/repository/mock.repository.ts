import { PokemonEntity } from "../../domain/pokemon.entity";
import { PokemonRepository } from "../../domain/pokemon.repository";

const MOCK_POKEMON = {
    id:"000-000",
    name:"pickachu",
    moves:[{
        name:"pound"
    }],
    types:[{
        name:"electric"
    }]
}

export class MockRepository implements PokemonRepository {
    async registerPokemon(): Promise<any> {
        const pokemon = MOCK_POKEMON;
        return pokemon;
    }
    async deletePokemonById(id:string): Promise<any> {
        const pokemon = MOCK_POKEMON;
        return pokemon
    }
    async deletePokemonByName(name: string): Promise<any> {

    }
    async listPokemon(): Promise<any> {
        const pokemons = [MOCK_POKEMON, MOCK_POKEMON, MOCK_POKEMON]
        return pokemons;
    }
}