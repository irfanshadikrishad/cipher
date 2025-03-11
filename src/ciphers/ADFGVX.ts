import { Cipher } from "../Cipher.js"

export class ADFGVX extends Cipher {
  private key: string = "CIPHER"
  private codeword: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  private polybiusSquare: Map<string, string> = new Map()
  private reverseSquare: Map<string, string> = new Map()
  private adfgvx: string[] = ["A", "D", "F", "G", "V", "X"]

  constructor(key?: string, codeword?: string) {
    super()
    if (key) this.key = key.toUpperCase()
    if (codeword) this.codeword = codeword.toUpperCase()
    this.createPolybiusSquare(this.codeword)
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
      console.log(grid)

      return keyOrder
        .map((col) => grid.map((row) => row[col]).join(""))
        .join("")
    } else {
      const sortedKeyOrder = [...keyOrder].sort((a, b) =>
        this.key[a].localeCompare(this.key[b])
      )
      console.log(keyOrder, sortedKeyOrder)

      let charIndex = 0
      for (let sortedCol of sortedKeyOrder) {
        for (let row = 0; row < numRows; row++) {
          if (charIndex < text.length) {
            grid[row][sortedCol] = text[charIndex++]
          }
        }
      }
      console.log(grid)

      return grid.flat().join("")
    }
  }

  encrypt(text: string): string {
    const plaintext = text.replace(/[^A-Za-z0-9]/g, "").toUpperCase()
    const polybiusText = plaintext
      .split("")
      .map((char) => this.polybiusSquare.get(char) || "")
      .join("")

    return this.columnarTranspose(polybiusText)
  }

  decrypt(text: string): string {
    const encryptedText = text.replace(/[^A-Za-z0-9]/g, "").toUpperCase()
    const transposedText = this.columnarTranspose(encryptedText, true)
    // console.log(this.reverseSquare)

    const polybiusText =
      transposedText.match(/.{1,2}/g)?.map((char) => {
        console.log(char)
        return this.reverseSquare.get(char) || ""
      }) || []
    // console.log(polybiusText.join(""))

    return ""
  }
}
