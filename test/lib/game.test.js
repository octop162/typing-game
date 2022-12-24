import { Game } from "../../src/lib/game";

test("Create Object", () => {
  new Game();
});

test("Add Questions", () => {
  let game = new Game();
  game.addQuestion("ABCDE");
  game.addQuestion("vwxyz");
  expect(game.countQuestions()).toBe(2);
});
