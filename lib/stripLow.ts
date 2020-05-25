import assertString from "./utils/assertString.ts";

import blacklist from "./blacklist.ts";

export default function stripLow(str: any, keep_new_lines: any) {
  assertString(str);
  const chars = keep_new_lines
    ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F"
    : "\\x00-\\x1F\\x7F";
  return blacklist(str, chars);
}
