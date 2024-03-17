import { FetchOptions } from "./interface.service";

export class FetchService {
    static async fetch(url: string, options?: FetchOptions){
        const result = await fetch(url, options)
        const response = await result.json()
    
        return response;
    }
    
}