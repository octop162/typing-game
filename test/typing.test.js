import Typing from "../lib/typing";

test("Typing a alphabet character", () => {
  let typing = new Typing("abc");
  typing.type("a");
  expect(typing.typing).toBe("a");
});

test("Typing a japanese character", () => {
  let typing = new Typing("あ");
  typing.type("a");
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

test("Typing kana complete", () => {
  let typing = new Typing("あいうえお");
  typing.type("a");
  typing.type("i");
  typing.type("u");
  typing.type("e");
  typing.type("o");
  expect(typing.typing).toBe("aiueo");
  expect(typing.isComplete()).toBe(true);
});

test("Typing kana not complete", () => {
  let typing = new Typing("あいうえお");
  typing.type("a");
  expect(typing.typing).toBe("a");
  expect(typing.isComplete()).toBe(false);
});
