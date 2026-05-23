import { Cipher } from '../Cipher.js'

export class Bifid extends Cipher {
  private square: string[][]
  private charPos: Map<string, [number, number]>

  constructor(key: string = '') {
    super()
    const seen = new Set<string>()
    const alphabet: string[] = []

    for (const c of key.toUpperCase() + 'ABCDEFGHIKLMNOPQRSTUVWXYZ') {
      const ch = c === 'J' ? 'I' : c
      if (/[A-Z]/.test(ch) && !seen.has(ch)) {
        seen.add(ch)
        alphabet.push(ch)
      }
    }

    this.square = []
    this.charPos = new Map()
    for (let r = 0; r < 5; r++) {
      this.square.push(alphabet.slice(r * 5, r * 5 + 5))
      for (let c = 0; c < 5; c++) {
        this.charPos.set(alphabet[r * 5 + c], [r, c])
      }
    }
  }

  private toLetters(text: string): string[] {
    return text
      .toUpperCase()
      .split('')
      .filter((c) => /[A-Z]/.test(c))
      .map((c) => (c === 'J' ? 'I' : c))
  }

  encrypt(text: string): string {
    const letters = this.toLetters(text)
    const rows: number[] = []
    const cols: number[] = []
    for (const ch of letters) {
      const [r, c] = this.charPos.get(ch)!
      rows.push(r)
      cols.push(c)
    }
    // seq = [rows..., cols...], then read pairs
    const seq = [...rows, ...cols]
    const result: string[] = []
    for (let i = 0; i < seq.length; i += 2) {
      result.push(this.square[seq[i]][seq[i + 1]])
    }
    return result.join('')
  }

  decrypt(text: string): string {
    const letters = this.toLetters(text)
    const n = letters.length
    const coords: number[] = []
    for (const ch of letters) {
      const [r, c] = this.charPos.get(ch)!
      coords.push(r, c)
    }
    const rows = coords.slice(0, n)
    const cols = coords.slice(n)
    return letters.map((_, i) => this.square[rows[i]][cols[i]]).join('')
  }
}
