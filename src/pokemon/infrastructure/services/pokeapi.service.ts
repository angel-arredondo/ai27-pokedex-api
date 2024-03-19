import { PokeApiError } from "../utils/error.classes";
import { Fetch } from "../utils/fetch";
import { labels } from "../constants/labels";

export class PokeApiService {
  static async getPokemonByName(pokemonName: string) { 
      const result = await Fetch.fetch(
        `${process.env.POKE_API}${pokemonName}` ?? ""
      );

      if (!result.ok) throw new PokeApiError(labels.errors.pokeApi)
      const { name, moves, types } = await result.json();
      const pokemon = {
        name,
        moves: moves.slice(0, 4).map((key: any) => {
          return { name: key.move.name };
        }),
        types: types.map((key: any) => {
          return { name: key.type.name };
        }),
      };
      return pokemon;
  }
}
