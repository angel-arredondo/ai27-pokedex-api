
export class FetchError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'FetchError'
    }
}
export class DatabaseError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'DatabaseError'
    }
}

export class PokeApiError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'PokeApiError'
    }
}