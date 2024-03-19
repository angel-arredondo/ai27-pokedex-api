import { PokemonEntity } from "../../domain/pokemon.entity";
import { PokemonRepository } from "../../domain/pokemon.repository";
import labels from "../constants/labels";
import { DatabaseError } from "../utils/error.classes";
import { v4 as uuid } from "uuid";
import { getDbModel } from "../databases/jf.database";
import data from '../data/db.json'

export class JfRepository implements PokemonRepository {
  async registerPokemon(pokemon: PokemonEntity): Promise<PokemonEntity | null> {
    try {   
      const pokemonToCreate = data.pokemons.find(
        (p:PokemonEntity)=>p.name === pokemon.name
      )
      if(pokemonToCreate)
        return pokemonToCreate;
      
      const pokemons = getDbModel();
      pokemon.id = uuid();
      
      pokemons.insert(pokemon)
      const savedPokemon = pokemons.find({id:pokemon.id});
      return savedPokemon ?? null;
    } catch (e: unknown) {
      throw new DatabaseError(
        `${labels.errors.database.save} ${
          e instanceof Error ? e.message : "unknown"
        }`
      );
    }
  }
  async deletePokemonById(id: string): Promise<number> {
    try{
      const pokemons = getDbModel();
      pokemons.remove({ id })
      return 1;
    }catch(e){
      throw new DatabaseError(
        `${labels.errors.database.deleteId} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }
  async deletePokemonByName(name: string): Promise<number> {
    try{
      const pokemons = getDbModel();
      const pokemon = data.pokemons.find((p:PokemonEntity)=>p.name === name)
      if(!pokemon) return 0;
      pokemons.remove({ id: (pokemon as PokemonEntity).id })
      return 1;
    }catch(e){
      throw new DatabaseError(
        `${labels.errors.database.deleteName} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }
  listPokemon(): PokemonEntity[] | null {
    try{
      const pokemons = getDbModel();
      return Array.from(pokemons)
    }catch(e){
      throw new DatabaseError(
        `${labels.errors.database.list} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }
}
