import { Cipher } from '../Cipher.js'

export class Beaufort extends Cipher {
  private key: string

  constructor(key: string) {
    super()
    if (!key || !/^[a-zA-Z]+$/.test(key)) {
      throw new Error('Key must be a non-empty string containing only letters.')
    }
    this.key = key.toUpperCase()
  }

  private process(text: string): string {
    let j = 0
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0)
        const keyCode = this.key[j % this.key.length].charCodeAt(0) - 65
        if (code >= 65 && code <= 90) {
          j++
          return String.fromCharCode(((keyCode - (code - 65) + 26) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          j++
          return String.fromCharCode(((keyCode - (code - 97) + 26) % 26) + 97)
        }
        return char
      })
      .join('')
  }

  encrypt(text: string): string {
    return this.process(text)
  }

  decrypt(text: string): string {
    return this.process(text)
  }
}
