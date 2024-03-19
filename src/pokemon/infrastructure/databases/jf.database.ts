import { connect } from "json-file-database";
import { PokemonEntity } from "../../domain/pokemon.entity";

export const getDbModel =() =>{
    const db = connect({
    file: "./src/pokemon/infrastructure/data/db.json",
    init: {
      pokemons: [],
    },
  });
  const pokemons = db<PokemonEntity>({
    name: "pokemons",
    primaryKey: "id",
  });
  return pokemons

}