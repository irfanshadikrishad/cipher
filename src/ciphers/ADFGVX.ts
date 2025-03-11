import { Cipher } from "../Cipher.js"

export class ADFGVX extends Cipher {
  private key: string
  private polybiusSquare: Map<string, string> = new Map()
  private reverseSquare: Map<string, string> = new Map()
  private adfgvx: string[] = ["A", "D", "F", "G", "V", "X"]

  constructor(key: string, alphabet: string) {
    super()
    if (alphabet.length !== 36)
      throw new Error("Alphabet must be exactly 36 characters long.")
    this.key = key.toUpperCase()
    this.createPolybiusSquare(alphabet.toUpperCase())
  }

  private createPolybiusSquare(alphabet: string) {
    let index = 0
    for (let row of this.adfgvx) {
      for (let col of this.adfgvx) {
        const letter = alphabet[index]
        const code = row + col
        this.polybiusSquare.set(letter, code)
        this.reverseSquare.set(code, letter)
        index++
      }
    }
  }

  private columnarTranspose(text: string, decrypt: boolean = false): string {
    const keyOrder = [...this.key]
      .map((char, index) => ({ char, index }))
      .sort((a, b) => a.char.localeCompare(b.char))
      .map((item) => item.index)

    const numCols = this.key.length
    const numRows = Math.ceil(text.length / numCols)
    const grid = Array.from({ length: numRows }, () =>
      new Array(numCols).fill("")
    )

    if (!decrypt) {
      let charIndex = 0
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          if (charIndex < text.length) {
            grid[row][col] = text[charIndex++]
          }
        }
      }
      return keyOrder
        .map((col) => grid.map((row) => row[col]).join(""))
        .join("")
    } else {
      const sortedKeyOrder = [...keyOrder].sort((a, b) =>
        this.key[a].localeCompare(this.key[b])
      )
      let charIndex = 0
      for (let sortedCol of sortedKeyOrder) {
        for (let row = 0; row < numRows; row++) {
          if (charIndex < text.length) {
            grid[row][sortedCol] = text[charIndex++]
          }
        }
      }
      return grid.flat().join("")
    }
  }

  encrypt(plaintext: string): string {
    const sanitizedText = plaintext.toUpperCase().replace(/[^A-Z0-9]/g, "")
    let polybiusText = sanitizedText
      .split("")
      .map((char) => this.polybiusSquare.get(char) || "")
      .join("")
    return this.columnarTranspose(polybiusText)
  }

  decrypt(ciphertext: string): string {
    let transposedText = this.columnarTranspose(
      ciphertext.replace(/\s/g, ""),
      true
    )
    return (
      transposedText
        .match(/.{2}/g)
        ?.map((pair) => this.reverseSquare.get(pair) || "")
        .join("") || ""
    )
  }
}
