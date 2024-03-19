"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const error_classes_1 = require("../utils/error.classes");
const labels_1 = require("../constants/labels");
const initDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(`${process.env.MONGO_URI}`);
    }
    catch (e) {
        throw new error_classes_1.DatabaseError(`${labels_1.labels.errors.database.connection}, ${e instanceof Error ?
            e.message : 'unknown'}`);
    }
});
exports.default = initDatabase;
