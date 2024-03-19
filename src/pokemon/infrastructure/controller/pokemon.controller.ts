import { PokemonUseCase } from "../../application/pokemonUseCase";
import { Request, Response } from "express";
import { PokeApiService } from "../services/pokeapi.service";
import { validationResult } from "express-validator";
import { labels } from "../constants/labels";
import { Validation } from "../utils/validation";

export class PokemonController {
  private readonly ERRORS_HANDLING = Object.freeze({
    DatabaseError: (res: Response) =>
      res.status(500).send(labels.responses.internalError),
    FetchError: (res: Response) =>
      res.status(500).send(labels.responses.internalError),
    PokeApiError: (res: Response) =>
      res.status(404).send(labels.responses.notFound),
  });

  constructor(private pokemonUseCase: PokemonUseCase) {}

  public get = async (_req: Request, res: Response) => {
    try {
      const pokemons = await this.pokemonUseCase.listPokemon();
      res.status(200).send({ pokemons });
    } catch (e) {
      if (e instanceof Error) {
        const errorHandler =
          this.ERRORS_HANDLING[e.name as keyof typeof this.ERRORS_HANDLING];
        return errorHandler
          ? errorHandler(res)
          : res.status(500).send(labels.responses.unknown);
      }
      res.status(500).send(labels.responses.unknown);
    }
  };

  public insert = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { name } = req.params;

    try {
      const newPokemon = await PokeApiService.getPokemonByName(name);
      const registeredPokemon = await this.pokemonUseCase.registerPokemon(
        newPokemon
      );
      res.status(201).send({ registeredPokemon });
    } catch (e: unknown) {
        
      if (e instanceof Error) {
        const errorHandler =
          this.ERRORS_HANDLING[e.name as keyof typeof this.ERRORS_HANDLING];
        return errorHandler
          ? errorHandler(res)
          : res.status(500).send(labels.responses.unknown);
      }
      res.status(500).send(labels.responses.unknown);
    }
  };

  public delete = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() });
    }
    const { identifier } = req.params;
    const isIdentifierId = Validation.isUUID(identifier);

    try {
      const deletedCount = isIdentifierId
        ? await this.pokemonUseCase.deletePokemonById(identifier)
        : await this.pokemonUseCase.deletePokemonByName(identifier);
      res.status(200).send({ deletedCount });
    } catch (e) {
        console.log(e)
      if (e instanceof Error) {
        const errorHandler =
          this.ERRORS_HANDLING[e.name as keyof typeof this.ERRORS_HANDLING];
        return errorHandler
          ? errorHandler(res)
          : res.status(500).send(labels.responses.unknown);
      }
      res.status(500).send(labels.responses.unknown);
    }
  };
}
