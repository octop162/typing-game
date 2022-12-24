import { Typing } from "./typing";
export class Game {
  constructor() {
    this.questions = [];
  }

  /**
   * add question
   * @param {string} question
   */
  addQuestion(question) {
    this.questions.push(new Typing(question));
  }

  /**
   * count questions
   * @returns {number} length
   */
  countQuestions() {
    return this.questions.length;
  }
}
