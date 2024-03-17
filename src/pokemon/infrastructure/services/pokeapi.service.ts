import { FetchService } from "./fetch.service";

export class PokeApiService {

    static async getPokemonByName(pokemonName: string){
        const {
            name,
            moves,
            types
        } = await FetchService.fetch(`${process.env.POKE_API}${pokemonName}` ?? '')

        return {
            name,
            moves: moves.slice(0,4).map((key: any)=>{
                return { name: key.move.name }
            }),
            types: types.map((key: any)=>{
                return { name: key.type.name }
            })
        }
    }
}