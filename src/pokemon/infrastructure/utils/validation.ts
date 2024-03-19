import { param, oneOf } from "express-validator";
import { labels } from "../constants/labels";

export class Validation {
  static pokemonName = param("name")
    .notEmpty()
    .withMessage(labels.validations.name.required)
    .isAlpha()
    .withMessage(labels.validations.name.invalid)
    .isLength({ min: 2, max: 10 })
    .withMessage(labels.validations.name.invalid);

  static pokemonIdentifier = oneOf(
    [
      param("identifier")
        .notEmpty()
        .withMessage(labels.validations.identifier.required)
        .isUUID(4)
        .withMessage(labels.validations.identifier.id),
      param("identifier")
        .notEmpty()
        .withMessage(labels.validations.identifier.required)
        .isAlpha()
        .withMessage(labels.validations.name.invalid)
        .isLength({ min: 2, max: 10 })
        .withMessage(labels.validations.name.invalid),
    ],
    {
      message: labels.validations.identifier.group,
    }
  );
  static isUUID(id: string) {
    const rgx =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return rgx.test(id);
  } 
}
