import assertString from "./utils/assertString.ts";

export default function toInt(str: string, radix: number) {
  assertString(str);
  return parseInt(str, radix || 10);
}
