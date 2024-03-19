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
exports.Fetch = void 0;
const error_classes_1 = require("./error.classes");
const labels_1 = require("../constants/labels");
class Fetch {
    static fetch(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetch(url, options);
                return result;
            }
            catch (e) {
                throw new error_classes_1.FetchError(`${labels_1.labels.errors.fetch} ${url}, ${e instanceof Error ? e.message : 'unknown'}`);
            }
        });
    }
}
exports.Fetch = Fetch;
