import { Cipher } from "../Cipher.js"
export class Ceaser extends Cipher {
  constructor(shift) {
    super()
    this.shift = shift
  }
  encrypt(text) {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + this.shift) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + this.shift) % 26) + 97)
        }
        return char
      })
      .join("")
  }
  decrypt(text) {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 - this.shift + 26) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 - this.shift + 26) % 26) + 97)
        }
        return char
      })
      .join("")
  }
}
