import { Cipher } from '../Cipher.js'

export class ColumnarTransposition extends Cipher {
  private key: string

  constructor(key: string) {
    super()
    if (!key || !/^[a-zA-Z]+$/.test(key)) {
      throw new Error('Key must be a non-empty string containing only letters.')
    }
    this.key = key.toUpperCase()
  }

  private sortedOrder(): number[] {
    return [...this.key]
      .map((char, i) => ({ char, i }))
      .sort((a, b) => a.char.localeCompare(b.char) || a.i - b.i)
      .map((x) => x.i)
  }

  encrypt(text: string): string {
    const numCols = this.key.length
    const numRows = Math.ceil(text.length / numCols)
    const grid: string[][] = Array.from({ length: numRows }, () =>
      Array(numCols).fill('')
    )

    for (let i = 0; i < text.length; i++) {
      grid[Math.floor(i / numCols)][i % numCols] = text[i]
    }

    return this.sortedOrder()
      .map((col) => grid.map((row) => row[col]).join(''))
      .join('')
  }

  decrypt(text: string): string {
    const numCols = this.key.length
    const numRows = Math.ceil(text.length / numCols)
    const extra = text.length % numCols
    const order = this.sortedOrder()

    const colLengths: number[] = order.map((col) =>
      extra === 0 ? numRows : col < extra ? numRows : numRows - 1
    )

    const grid: string[][] = Array.from({ length: numRows }, () =>
      Array(numCols).fill('')
    )
    let pos = 0
    for (let k = 0; k < order.length; k++) {
      const col = order[k]
      for (let row = 0; row < colLengths[k]; row++) {
        grid[row][col] = text[pos++]
      }
    }

    return grid.map((row) => row.join('')).join('')
  }
}
