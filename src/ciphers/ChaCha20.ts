import { Buffer } from 'buffer'
import crypto from 'crypto'
import { Cipher } from '../Cipher.js'

export class ChaCha20 extends Cipher {
  private key: Uint32Array
  private nonce: Uint32Array
  private counter: number

  constructor(
    key: Uint8Array | string,
    nonce: Uint8Array | string,
    counter: number = 0
  ) {
    super()
    if (typeof key === 'string') key = Buffer.from(key, 'base64')
    if (typeof nonce === 'string') nonce = Buffer.from(nonce, 'base64')
    if (key.length !== 32) throw new Error('Key must be 32 bytes (256-bit).')
    if (nonce.length !== 12) throw new Error('Nonce must be 12 bytes (96-bit).')
    this.key = new Uint32Array(new Uint8Array(key).buffer)
    this.nonce = new Uint32Array(new Uint8Array(nonce).buffer)
    this.counter = counter
  }

  private static rotl(x: number, n: number): number {
    return ((x << n) | (x >>> (32 - n))) >>> 0
  }

  private static quarterRound(
    s: Uint32Array,
    a: number,
    b: number,
    c: number,
    d: number
  ): void {
    s[a] = (s[a] + s[b]) >>> 0
    s[d] = ChaCha20.rotl(s[d] ^ s[a], 16)
    s[c] = (s[c] + s[d]) >>> 0
    s[b] = ChaCha20.rotl(s[b] ^ s[c], 12)
    s[a] = (s[a] + s[b]) >>> 0
    s[d] = ChaCha20.rotl(s[d] ^ s[a], 8)
    s[c] = (s[c] + s[d]) >>> 0
    s[b] = ChaCha20.rotl(s[b] ^ s[c], 7)
  }

  private block(): Uint8Array {
    // State: constants(0-3), key(4-11), counter(12), nonce(13-15)
    const state = new Uint32Array([
      0x61707865,
      0x3320646e,
      0x79622d32,
      0x6b206574,
      this.key[0],
      this.key[1],
      this.key[2],
      this.key[3],
      this.key[4],
      this.key[5],
      this.key[6],
      this.key[7],
      this.counter >>> 0,
      this.nonce[0],
      this.nonce[1],
      this.nonce[2],
    ])
    const working = new Uint32Array(state)
    for (let i = 0; i < 10; i++) {
      ChaCha20.quarterRound(working, 0, 4, 8, 12)
      ChaCha20.quarterRound(working, 1, 5, 9, 13)
      ChaCha20.quarterRound(working, 2, 6, 10, 14)
      ChaCha20.quarterRound(working, 3, 7, 11, 15)
      ChaCha20.quarterRound(working, 0, 5, 10, 15)
      ChaCha20.quarterRound(working, 1, 6, 11, 12)
      ChaCha20.quarterRound(working, 2, 7, 8, 13)
      ChaCha20.quarterRound(working, 3, 4, 9, 14)
    }
    for (let i = 0; i < 16; i++) working[i] = (working[i] + state[i]) >>> 0
    this.counter++
    return new Uint8Array(working.buffer)
  }

  encrypt(plaintext: string): string {
    const input = new TextEncoder().encode(plaintext)
    const out = new Uint8Array(input.length)
    for (let i = 0; i < input.length; i += 64) {
      const ks = this.block()
      const len = Math.min(64, input.length - i)
      for (let j = 0; j < len; j++) out[i + j] = input[i + j] ^ ks[j]
    }
    return Buffer.from(out).toString('base64')
  }

  decrypt(ciphertext: string): string {
    this.counter = 0
    const input = new Uint8Array(Buffer.from(ciphertext, 'base64'))
    const out = new Uint8Array(input.length)
    for (let i = 0; i < input.length; i += 64) {
      const ks = this.block()
      const len = Math.min(64, input.length - i)
      for (let j = 0; j < len; j++) out[i + j] = input[i + j] ^ ks[j]
    }
    return new TextDecoder().decode(out)
  }

  static generateKey(): string {
    return Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString(
      'base64'
    )
  }

  static generateNonce(): string {
    return Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString(
      'base64'
    )
  }
}
