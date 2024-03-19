"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pokemon_route_1 = require("./infrastructure/v1/routes/pokemon.route");
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_database_1 = __importDefault(require("./infrastructure/databases/mongo.database"));
const helmet_1 = __importDefault(require("helmet"));
const labels_1 = require("./infrastructure/constants/labels");
const origins_1 = require("./infrastructure/constants/origins");
const error_classes_1 = require("./infrastructure/utils/error.classes");
const mongo_repository_1 = require("./infrastructure/repository/mongo.repository");
dotenv_1.default.config();
const createApp = (repository) => {
    const app = (0, express_1.default)();
    if (repository instanceof mongo_repository_1.MongoRepository)
        app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (origins_1.acceptedOrigins.includes(origin))
                return callback(null, true);
            return callback(new error_classes_1.ErrorCors(labels_1.labels.errors.cors));
        }
    }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    const PORT = process.env.PORT || 3001;
    app.use((0, pokemon_route_1.createRouter)(repository));
    app.listen(PORT, () => {
        if (repository instanceof mongo_repository_1.MongoRepository) {
            (0, mongo_database_1.default)();
        }
        console.log(`${labels_1.labels.init} ${PORT} 🚀`);
    });
};
exports.createApp = createApp;
