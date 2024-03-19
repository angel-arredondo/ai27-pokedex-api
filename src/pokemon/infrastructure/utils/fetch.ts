
import { FetchOptions } from "../../interfaces";
import { FetchError } from "./error.classes";
import { labels } from "../constants/labels";

export class Fetch {
    static async fetch(
        url: string, 
        options?: FetchOptions
    ) {
        try{            
            const result = await fetch(url, options)
            return result     
        }catch(e: unknown){
            throw new FetchError(`${labels.errors.fetch} ${url}, ${
                e instanceof Error ? e.message : 'unknown'}`
            )
        }
    }    
}