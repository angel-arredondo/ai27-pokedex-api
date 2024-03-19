import { PokemonEntity } from "../../domain/pokemon.entity";
import { PokemonRepository } from "../../domain/pokemon.repository";
import testConstant from "../constants/tests";

export class TestRepository implements PokemonRepository {
  async registerPokemon(pokemon: PokemonEntity): Promise<PokemonEntity | null> {
      return pokemon;
  }
  async deletePokemonById(_id: string): Promise<number> {
    return 1
  }
  async deletePokemonByName(_name: string): Promise<number> {
    return 1
  }
  listPokemon(): PokemonEntity[] | null {
    return [testConstant.pokemon]
  }
}
