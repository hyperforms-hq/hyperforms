/**
 * Returns a random item from the given array
 * @param items
 */
export function getRandomItemFromArray(items: Array<any>) {
  return items[Math.floor(Math.random() * items.length)];
}
