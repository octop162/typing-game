export class Typing {
  constructor(answer) {
    this.typing = "";
    this.remain = answer;
    this.answer = answer;
  }

  /**
   * type a character
   * @param {string} charcter
   * @returns {boolean} is success
   */
  type(character) {
    if (this.isValidNextCharacter(character)) {
      this.typing += character;
      this.remain = this.remain.substring(1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * check next character
   * @returns {boolean} is valid
   */
  isValidNextCharacter(character) {
    return this.remain[0] === character;
  }

  /**
   * check complete
   * @return {boolean} is complete
   */
  isComplete() {
    return this.remain === "";
  }
}
