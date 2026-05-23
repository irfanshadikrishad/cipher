import { Cipher } from '../Cipher.js'

const VALID_A = new Set([1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25])

function modInverse(a: number, m: number): number {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x
  }
  throw new Error(`No modular inverse for a=${a}`)
}

export class Affine extends Cipher {
  private a: number
  private b: number
  private aInv: number

  constructor(a: number, b: number) {
    super()
    if (!VALID_A.has(a)) {
      throw new Error(
        `'a' must be coprime with 26. Valid values: ${[...VALID_A].join(', ')}`
      )
    }
    this.a = a
    this.b = ((b % 26) + 26) % 26
    this.aInv = modInverse(a, 26)
  }

  encrypt(text: string): string {
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(
            ((this.a * (code - 65) + this.b) % 26) + 65
          )
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(
            ((this.a * (code - 97) + this.b) % 26) + 97
          )
        }
        return char
      })
      .join('')
  }

  decrypt(text: string): string {
    return text
      .split('')
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(
            ((this.aInv * (code - 65 - this.b + 26)) % 26) + 65
          )
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(
            ((this.aInv * (code - 97 - this.b + 26)) % 26) + 97
          )
        }
        return char
      })
      .join('')
  }
}
