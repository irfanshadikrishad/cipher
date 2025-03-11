import { Cipher } from "../Cipher.js"
export class ADFGVX extends Cipher {
  constructor(key, codeword) {
    super()
    this.key = "CIPHER"
    this.codeword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    this.polybiusSquare = new Map()
    this.reverseSquare = new Map()
    this.adfgvx = ["A", "D", "F", "G", "V", "X"]
    if (key) this.key = key.toUpperCase()
    if (codeword) this.codeword = codeword.toUpperCase()
    this.createPolybiusSquare(this.codeword)
  }
  createPolybiusSquare(codeword) {
    const uniqueLetters = []
    for (const char of codeword.toUpperCase()) {
      if (!uniqueLetters.includes(char)) {
        uniqueLetters.push(char)
      }
    }
    const remainingChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      .split("")
      .filter((char) => !uniqueLetters.includes(char))
    const alphabet = [...uniqueLetters, ...remainingChars]
    let index = 0
    for (const row of this.adfgvx) {
      for (const col of this.adfgvx) {
        const letter = alphabet[index]
        const code = row + col
        this.polybiusSquare.set(letter, code)
        this.reverseSquare.set(code, letter)
        index++
      }
    }
  }
  columnarTranspose(text, decrypt = false) {
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
      for (const sortedCol of sortedKeyOrder) {
        for (let row = 0; row < numRows; row++) {
          if (charIndex < text.length) {
            grid[row][sortedCol] = text[charIndex++]
          }
        }
      }
      return grid.flat().join("")
    }
  }
  encrypt(text) {
    const plaintext = text.replace(/[^A-Za-z0-9]/g, "").toUpperCase()
    const polybiusText = plaintext
      .split("")
      .map((char) => this.polybiusSquare.get(char) || "")
      .join("")
    return this.columnarTranspose(polybiusText)
  }
  decrypt(text) {
    var _a
    const encrypted = text.replace(/[^A-Za-z0-9]/g, "").toUpperCase()
    const intermediate = this.columnarTranspose(encrypted, true)
    const polybiusText =
      ((_a = intermediate.match(/.{1,2}/g)) === null || _a === void 0
        ? void 0
        : _a.map((char) => {
            return this.reverseSquare.get(char) || ""
          })) || []
    return polybiusText.join("")
  }
}
