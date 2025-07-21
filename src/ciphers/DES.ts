import { Buffer } from 'buffer'
import { Cipher } from '../Cipher.js'

const IP = [
  // Initial Permutation
  58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38,
  30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1,
  59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39,
  31, 23, 15, 7,
]

const FP = [
  // Final Permutation
  40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
  54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9,
  49, 17, 57, 25,
]

export class DES extends Cipher {
  private key: bigint

  constructor(key: string) {
    super()
    if (key.length !== 8)
      throw new Error('DES key must be exactly 8 characters.')
    this.key = this.stringToBigInt(key)
  }

  encrypt(text: string): string {
    const paddedText = this.pad(text)
    const encryptedBlocks = []

    for (let i = 0; i < paddedText.length; i += 8) {
      const block = paddedText.substring(i, i + 8)
      const input = this.stringToBigInt(block)
      const permuted = this.permute(input, IP)
      const encrypted = this.feistel(permuted)
      const finalPerm = this.permute(encrypted, FP)
      encryptedBlocks.push(finalPerm.toString(16).padStart(16, '0'))
    }

    return encryptedBlocks.join('') // Concatenate hex strings
  }

  decrypt(text: string): string {
    let decryptedText = ''

    for (let i = 0; i < text.length; i += 16) {
      // 16 hex chars = 8 bytes
      const block = BigInt('0x' + text.substring(i, i + 16))
      const permuted = this.permute(block, IP)
      const decrypted = this.feistel(permuted)
      const finalPerm = this.permute(decrypted, FP)
      decryptedText += this.bigIntToString(finalPerm)
    }

    return this.unpad(decryptedText)
  }

  private pad(text: string): string {
    const padLength = 8 - (text.length % 8)
    return text + String.fromCharCode(padLength).repeat(padLength)
  }

  private unpad(text: string): string {
    const padLength = text.charCodeAt(text.length - 1)
    return text.slice(0, -padLength)
  }

  private feistel(input: bigint): bigint {
    let L = input >> BigInt(32)
    let R = input & BigInt(0xffffffff)

    for (let i = 0; i < 16; i++) {
      const roundKey = this.getRoundKey()
      const newR = L ^ this.f(R, roundKey)
      L = R
      R = newR
    }

    return (R << BigInt(32)) | L
  }

  private getRoundKey(): bigint {
    return this.key // Placeholder (Key Schedule logic needed)
  }

  private f(block: bigint, roundKey: bigint): bigint {
    return block ^ roundKey // Placeholder (Expand, S-Box, Permutation)
  }

  private permute(input: bigint, table: number[]): bigint {
    let output = BigInt(0)
    for (let i = 0; i < table.length; i++) {
      output |= ((input >> BigInt(64 - table[i])) & BigInt(1)) << BigInt(63 - i)
    }
    return output
  }

  private stringToBigInt(str: string): bigint {
    return BigInt('0x' + Buffer.from(str, 'utf8').toString('hex'))
  }

  private bigIntToString(num: bigint): string {
    return Buffer.from(num.toString(16).padStart(16, '0'), 'hex').toString(
      'utf8'
    )
  }
}
