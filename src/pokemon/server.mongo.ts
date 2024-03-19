import { MongoRepository } from "./infrastructure/repository/mongo.repository";
import { createApp } from "./pokemon.app";

const mongoPokemonRepository = new MongoRepository();
createApp(mongoPokemonRepository);