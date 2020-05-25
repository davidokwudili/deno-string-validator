// validators
import isAlpha, { locales as isAlphaLocales } from "./lib/isAlpha.ts";

// validator version
const version = "0.0.1";

const validator: any = {
  isAlpha,
  isAlphaLocales
};

export default validator;
