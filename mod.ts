// deno validators
import isAlpha, { locales as isAlphaLocales } from "./lib/isAlpha.ts";
import isAlphanumeric, {
  locales as isAlphanumericLocales,
} from "./lib/isAlphanumeric.ts";
import isAscii from "./lib/isAscii.ts";
import isBase32 from "./lib/isBase32.ts";
import isFQDN from "./lib/isFQDN.ts";

import toDate from "./lib/toDate.ts";
import equals from "./lib/equals.ts";
import matches from "./lib/matches.ts";
import contains from "./lib/contains.ts";
import blacklist from "./lib/blacklist.ts";
import escape from "./lib/escape.ts";
import toBoolean from "./lib/toBoolean.ts";
import toFloat from "./lib/toFloat.ts";
import toInt from "./lib/toInt.ts";

// deno validator version
const version = "0.0.1";

const validator: any = {
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isAscii,
  isBase32,
  isFQDN,
  toDate,
  equals,
  matches,
  contains,
  blacklist,
  escape,
  toBoolean,
  toFloat,
  toInt,

  version,
};

export default validator;
