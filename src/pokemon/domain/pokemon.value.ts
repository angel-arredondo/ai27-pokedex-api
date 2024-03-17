import { PokemonEntity, Move, Type } from "./pokemon.entity";
export class PokemonValue implements PokemonEntity {
    id: string;
    name: string;
    moves: Move[];
    types: Type[];

    constructor({name, moves, types}: Omit<PokemonEntity,"id">){
        this.id = ''
        this.name = name
        this.moves = moves
        this.types = types
    }

}