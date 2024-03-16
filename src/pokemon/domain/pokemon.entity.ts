export interface PokemonEntity {
    uuid: string;
    name: string;
    moves: Move[];
    types: Type[];
}

interface Name {
    name: string;
}

export interface Move extends Name {}

export interface Type extends Name {}