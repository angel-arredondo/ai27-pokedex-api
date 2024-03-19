"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbModel = void 0;
const json_file_database_1 = require("json-file-database");
const getDbModel = () => {
    const db = (0, json_file_database_1.connect)({
        file: "./src/pokemon/infrastructure/data/db.json",
        init: {
            pokemons: [],
        },
    });
    const pokemons = db({
        name: "pokemons",
        primaryKey: "id",
    });
    return pokemons;
};
exports.getDbModel = getDbModel;
