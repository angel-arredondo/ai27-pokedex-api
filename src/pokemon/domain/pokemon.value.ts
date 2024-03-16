import { PokemonEntity, Move, Type } from "./pokemon.entity";
import { v4 as uuidd } from 'uuid';
export class PokemonValue implements PokemonEntity {
    uuid: string;
    name: string;
    moves: Move[];
    types: Type[];

    constructor({name, moves, types}:Omit<PokemonEntity,"uuid">){
        this.uuid = uuidd()
        this.name = name
        this.moves = moves
        this.types = types
    }

}