import { getRandomItemFromArray } from "../arrays";

expect.extend({
  toBeOneOf(received: any, items: Array<any>) {
    const pass = items.includes(received);
    const message = () =>
      `expected ${received} to be contained in array [${items}]`;
    if (pass) {
      return {
        message,
        pass: true
      };
    }
    return {
      message,
      pass: false
    };
  }
});

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeOneOf(items: Array<any>): CustomMatcherResult;
    }
  }
}

describe("arrays", () => {
  describe("getRandomItemFromArray", () => {
    it("should return one of the expected - 1", () => {
      expect(getRandomItemFromArray([1, 2])).toBeOneOf([1, 2]);
    });
  });
});
