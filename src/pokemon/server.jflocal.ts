import { createApp } from "./pokemon.app";
import { JfRepository } from "./infrastructure/repository/jf.repository";

const jfPokemonRepository = new JfRepository();
createApp(jfPokemonRepository);