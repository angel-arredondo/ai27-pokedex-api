"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const express_validator_1 = require("express-validator");
const labels_1 = require("../constants/labels");
class Validation {
    static isUUID(id) {
        const rgx = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        return rgx.test(id);
    }
}
exports.Validation = Validation;
Validation.pokemonName = (0, express_validator_1.param)("name")
    .notEmpty()
    .withMessage(labels_1.labels.validations.name.required)
    .isAlpha()
    .withMessage(labels_1.labels.validations.name.invalid)
    .isLength({ min: 2, max: 10 })
    .withMessage(labels_1.labels.validations.name.invalid);
Validation.pokemonIdentifier = (0, express_validator_1.oneOf)([
    (0, express_validator_1.param)("identifier")
        .notEmpty()
        .withMessage(labels_1.labels.validations.identifier.required)
        .isUUID(4)
        .withMessage(labels_1.labels.validations.identifier.id),
    (0, express_validator_1.param)("identifier")
        .notEmpty()
        .withMessage(labels_1.labels.validations.identifier.required)
        .isAlpha()
        .withMessage(labels_1.labels.validations.name.invalid)
        .isLength({ min: 2, max: 10 })
        .withMessage(labels_1.labels.validations.name.invalid),
], {
    message: labels_1.labels.validations.identifier.group,
});
