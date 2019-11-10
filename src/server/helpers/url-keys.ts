import { getRandomItemFromArray } from "./arrays";

function genCharArray(charA: string, charZ: string) {
  let a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

/**
 * Returns an array with all the characters keys in a URL key
 */
export function generateAllCharactersForUrlKey() {
  return [
    ...genCharArray("a", "z"),
    ...genCharArray("A", "Z"),
    ...genCharArray("0", "9")
  ];
}

/**
 * Generates a random key, with the given length, consisting of characters in the format [a-zA-Z0-9]
 * @param length
 */
export function generateUrlKey(length: number = 10) {
  const possibilities = [
    ...genCharArray("a", "z"),
    ...genCharArray("A", "Z"),
    ...genCharArray("0", "9")
  ];
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomItemFromArray(possibilities));
  }
  return result.join("");
}
