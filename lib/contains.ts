import assertString from "./utils/assertString.ts";
import toString from "./utils/toString.ts";

export default function contains(str: string, elem: string) {
  assertString(str);
  return str.indexOf(toString(elem)) >= 0;
}
