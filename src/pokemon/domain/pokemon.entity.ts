export interface PokemonEntity {
    uuid: string;
    name: string;
    moves: Move[];
    types: Type[];
}

interface Name {
    name: string;
}

interface Move extends Name {}

interface Type extends Name {}