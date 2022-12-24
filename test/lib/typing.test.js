import { Typing } from "../../src/lib/typing";

test("Create a Object", () => {
  new Typing("test");
});

test("Typing a alphabet character", () => {
  let typing = new Typing("abc");
  let result = typing.type("a");
  expect(result).toBe(true);
  expect(typing.typing).toBe("a");
  expect(typing.remain).toBe("bc");
});

test("Typing a invalid alphabet character", () => {
  let typing = new Typing("abc");
  let result = typing.type("z");
  expect(result).toBe(false);
  expect(typing.typing).toBe("");
  expect(typing.remain).toBe("abc");
});

test("Complete alphabet", () => {
  let typing = new Typing("abc");
  typing.type("a");
  typing.type("b");
  typing.type("c");
  expect(typing.typing).toBe("abc");
  expect(typing.remain).toBe("");
  expect(typing.isComplete()).toBe(true);
});

test("Not Complete alphabet", () => {
  let typing = new Typing("abc");
  typing.type("a");
  typing.type("z");
  typing.type("b");
  expect(typing.typing).toBe("ab");
  expect(typing.remain).toBe("c");
  expect(typing.isComplete()).toBe(false);
});
