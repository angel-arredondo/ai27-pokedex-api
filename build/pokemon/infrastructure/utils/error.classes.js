"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCors = exports.PokeApiError = exports.DatabaseError = exports.FetchError = void 0;
class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetchError';
    }
}
exports.FetchError = FetchError;
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
    }
}
exports.DatabaseError = DatabaseError;
class PokeApiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PokeApiError';
    }
}
exports.PokeApiError = PokeApiError;
class ErrorCors extends Error {
    constructor(message) {
        super(message);
        this.name = 'ErrorCors';
    }
}
exports.ErrorCors = ErrorCors;
