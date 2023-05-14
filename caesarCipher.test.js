import caesarCipher from "./caesarCipher";

describe("caesar cipher", () => {
  it("returns indexes of each letter", () => {
    expect(caesarCipher("hello", 1).newIndex()).toEqual([8, 5, 12, 12, 15]);
  });
  it("returns ciphered string", () => {
    expect(caesarCipher("attack", 5).getNewLetter()).toBe("fyyfhp");
  });
});
