export class Typing {
  constructor(answer) {
    this.typing = "";
    this.answer = answer;
  }

  /**
   * type a character
   * @param {string} charcter
   * @returns {boolean} is success
   */
  type(character) {
    this.typing += character;
    return true;
  }

  /**
   * check complete
   * @return {boolean} is complete
   */
  isComplete() {
    return true;
  }
}
