import { Cipher } from "../Cipher"

export class Playfair extends Cipher {
  private keyMatrix: string[][]

  constructor(key: string) {
    super()
    this.keyMatrix = this.generateKeyMatrix(key)
  }

  private generateKeyMatrix(key: string): string[][] {
    key = key.toUpperCase().replace(/J/g, "I")
    const seen = new Set()
    const matrix: string[] = []
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"

    key += alphabet
    for (const char of key) {
      if (!seen.has(char) && alphabet.includes(char)) {
        seen.add(char)
        matrix.push(char)
      }
    }

    return Array.from({ length: 5 }, (_, i) => matrix.slice(i * 5, i * 5 + 5))
  }

  private findPosition(char: string): [number, number] {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (this.keyMatrix[row][col] === char) {
          return [row, col]
        }
      }
    }
    return [-1, -1]
  }

  private prepareText(text: string): string {
    text = text
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "")
    let result = ""
    for (let i = 0; i < text.length; i += 2) {
      const a = text[i]
      const b = text[i + 1] || "X"
      if (a === b) {
        result += a + "X"
        i--
      } else {
        result += a + b
      }
    }
    return result
  }

  private processPairs(text: string, encrypt: boolean): string {
    let result = ""
    const shift = encrypt ? 1 : -1

    for (let i = 0; i < text.length; i += 2) {
      const [row1, col1] = this.findPosition(text[i])
      const [row2, col2] = this.findPosition(text[i + 1])

      if (row1 === row2) {
        result += this.keyMatrix[row1][(col1 + shift + 5) % 5]
        result += this.keyMatrix[row2][(col2 + shift + 5) % 5]
      } else if (col1 === col2) {
        result += this.keyMatrix[(row1 + shift + 5) % 5][col1]
        result += this.keyMatrix[(row2 + shift + 5) % 5][col2]
      } else {
        result += this.keyMatrix[row1][col2]
        result += this.keyMatrix[row2][col1]
      }
    }
    return result
  }

  encrypt(text: string): string {
    text = this.prepareText(text)
    return this.processPairs(text, true)
  }

  decrypt(text: string): string {
    return this.processPairs(text, false)
  }
}
