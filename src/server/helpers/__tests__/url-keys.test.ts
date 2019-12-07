import { generateAllCharactersForUrlKey, generateUrlKey } from "../url-keys";

describe("url-keys", () => {
  describe("generateAllCharactersForUrlKey", () => {
    it("should work", () => {
      expect(generateAllCharactersForUrlKey()).toEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]);
    });
  });
  describe("generateUrlKey", () => {
    it("should work", async () => {
      const x = await generateUrlKey(10);
      expect(x).toHaveLength(10);
    });
  });
});

export default undefined;
