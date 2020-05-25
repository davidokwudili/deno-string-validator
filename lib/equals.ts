import assertString from "./utils/assertString.ts";

export default function equals(str: string, comparison: string) {
  assertString(str);
  return str === comparison;
}
