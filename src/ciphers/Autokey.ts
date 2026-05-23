import { Cipher } from '../Cipher.js'

export class Autokey extends Cipher {
  private key: string

  constructor(key: string) {
    super()
    if (!key || !/^[a-zA-Z]+$/.test(key)) {
      throw new Error('Key must be a non-empty string containing only letters.')
    }
    this.key = key.toUpperCase()
  }

  encrypt(text: string): string {
    const letters = text.split('').filter((c) => /[a-zA-Z]/.test(c))
    const runningKey = (this.key + letters.join('').toUpperCase()).split('')

    let j = 0
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0)
        const shift = runningKey[j].charCodeAt(0) - 65
        if (code >= 65 && code <= 90) {
          j++
          return String.fromCharCode(((code - 65 + shift) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          j++
          return String.fromCharCode(((code - 97 + shift) % 26) + 97)
        }
        return char
      })
      .join('')
  }

  decrypt(text: string): string {
    const runningKey = this.key.split('')
    let j = 0

    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0)
        const shift = runningKey[j].charCodeAt(0) - 65
        if (code >= 65 && code <= 90) {
          const plain = ((code - 65 - shift + 26) % 26) + 65
          runningKey.push(String.fromCharCode(plain))
          j++
          return String.fromCharCode(plain)
        } else if (code >= 97 && code <= 122) {
          const plain = ((code - 97 - shift + 26) % 26) + 97
          runningKey.push(String.fromCharCode(plain - 32))
          j++
          return String.fromCharCode(plain)
        }
        return char
      })
      .join('')
  }
}
