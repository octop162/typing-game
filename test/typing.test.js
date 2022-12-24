import Typing from "../lib/typing";

test("Typing a alphabet character", () => {
  let typing = new Typing("abc");
  let result = typing.type("a");
  expect(result).toBe(true);
  expect(typing.typing).toBe("a");
});

test("Typing alphabet complete", () => {
  let typing = new Typing("abc");
  typing.type("a");
  typing.type("b");
  typing.type("c");
  expect(typing.typing).toBe("abc");
  expect(typing.isComplete()).toBe(true);
});

test("Typing alphanet not complete", () => {
  let typing = new Typing("abc");
  typing.type("a");
  expect(typing.typing).toBe("a");
  expect(typing.isComplete()).toBe(false);
});
