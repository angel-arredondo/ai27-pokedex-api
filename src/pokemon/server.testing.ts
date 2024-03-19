import { TestRepository } from "./infrastructure/repository/test.repository";
import { createApp } from "./pokemon.app";

const testPokemonRepository = new TestRepository();
createApp(testPokemonRepository);