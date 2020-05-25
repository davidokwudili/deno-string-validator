export default function merge(obj = {}, defaults: any) {
  for (const key in defaults) {
    if (typeof obj[key] === "undefined") {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
