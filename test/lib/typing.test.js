import { Typing } from "../../src/lib/typing";

test("Typing a alphabet character", () => {
  let typing = new Typing("abc");
  let result = typing.type("a");
  expect(result).toBe(true);
  expect(typing.typing).toBe("a");
});

test("Typing a invalid alphabet character", () => {
  let typing = new Typing("abc");
  let result = typing.type("z");
  expect(result).toBe(false);
  expect(typing.typing).toBe("");
});

test("Complete alphabet", () => {
  let typing = new Typing("abc");
  typing.type("a");
  typing.type("b");
  typing.type("c");
  expect(typing.typing).toBe("abc");
  expect(typing.isComplete()).toBe(true);
});

test("Not Complete alphabet", () => {
  let typing = new Typing("abc");
  typing.type("a");
  expect(typing.typing).toBe("a");
  expect(typing.isComplete()).toBe(false);
});
