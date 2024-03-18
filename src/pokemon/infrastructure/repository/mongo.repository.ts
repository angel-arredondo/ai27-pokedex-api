import { PokemonEntity } from "../../domain/pokemon.entity";
import { PokemonRepository } from "../../domain/pokemon.repository";
import { DatabaseError } from "../utils/error.classes";
import PokemonModel from "../model/pokemon.schema";
import { v4 as uuidd } from "uuid";
import { labels } from "../constants/labels";

export class MongoRepository implements PokemonRepository {
  async registerPokemon(pokemon: PokemonEntity): Promise<PokemonEntity | null> {
    try {
      const newPokemon = new PokemonModel(pokemon);
      newPokemon._id = uuidd();
      await newPokemon.save();
      return newPokemon as PokemonEntity;
    } catch (e: unknown) {
      throw new DatabaseError(
        `${labels.errors.database.save} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }

  async deletePokemonById(id: string): Promise<number> {
    try {
      const res = await PokemonModel.deleteOne({ _id: id });
      return res.deletedCount;
    } catch (e: unknown) {
      throw new DatabaseError(
        `${labels.errors.database.deleteId} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }

  async deletePokemonByName(name: string): Promise<number> {
    try {
      const res = await PokemonModel.deleteOne({ name });
      return res.deletedCount;
    } catch (e: unknown) {
      throw new DatabaseError(
        `${labels.errors.database.deleteName} ${
            e instanceof Error ? 
            e.message : "unknown"}`
      );
    }
  }
  
  async listPokemon(): Promise<PokemonEntity[] | null> {
    try{
        const pokemons = await PokemonModel.find({});
        return pokemons as PokemonEntity[];
    }catch(e: unknown){
        throw new DatabaseError(`${labels.errors.database.list} ${
            e instanceof Error ? 
            e.message : 'unknown'}`
        )
    } 
  }
}
