import { comparePassword, hashPassword } from "../passwords";

describe("passwords", () => {
  describe("hashPassword", () => {
    it("should work", async () => {
      const hashed = await hashPassword("banana-123");
      expect(typeof hashed).toBe("string");
      console.log(hashed);

      const verified = await comparePassword("banana-123", hashed);
      expect(verified).toBe(true);
    });
  });
});
