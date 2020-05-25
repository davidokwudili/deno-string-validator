import assertString from "./utils/assertString.ts";
import merge from "./utils/merge.ts";

const default_is_empty_options: any = {
  ignore_whitespace: false,
};

export default function isEmpty(
  str: string,
  options: any = default_is_empty_options,
) {
  assertString(str);
  options = merge(options, default_is_empty_options);

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
