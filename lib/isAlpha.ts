import assertString from "./utils/assertString.ts";
import { alpha } from "./alpha.ts";

export default function isAlpha(str: string, locale = "en-US") {
  assertString(str);
  if (locale in alpha) {
    return alpha[locale].test(str);
  }
  throw new Error(`Invalid locale '${locale}'`);
}

export const locales = Object.keys(alpha);
