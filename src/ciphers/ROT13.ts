import { Cipher } from '../Cipher'

export class ROT13 extends Cipher {
  constructor() {
    super()
  }

  private rotate(char: string): string {
    const code = char.charCodeAt(0)

    // A–Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65)
    }

    // a–z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + 13) % 26) + 97)
    }

    return char
  }

  encrypt(text: string): string {
    return text
      .split('')
      .map((char) => this.rotate(char))
      .join('')
  }

  decrypt(text: string): string {
    return this.encrypt(text)
  }
}
