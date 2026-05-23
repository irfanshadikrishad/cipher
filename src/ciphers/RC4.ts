import { Buffer } from 'buffer'
import { Cipher } from '../Cipher.js'

export class RC4 extends Cipher {
  private key: Uint8Array

  constructor(key: string) {
    super()
    if (!key) throw new Error('Key must be a non-empty string.')
    this.key = new TextEncoder().encode(key)
  }

  private keystream(length: number): Uint8Array {
    const S = Uint8Array.from({ length: 256 }, (_, i) => i)
    let j = 0
    for (let i = 0; i < 256; i++) {
      j = (j + S[i] + this.key[i % this.key.length]) & 0xff
      ;[S[i], S[j]] = [S[j], S[i]]
    }

    const stream = new Uint8Array(length)
    let i = 0
    j = 0
    for (let k = 0; k < length; k++) {
      i = (i + 1) & 0xff
      j = (j + S[i]) & 0xff
      ;[S[i], S[j]] = [S[j], S[i]]
      stream[k] = S[(S[i] + S[j]) & 0xff]
    }
    return stream
  }

  encrypt(plaintext: string): string {
    const bytes = new TextEncoder().encode(plaintext)
    const ks = this.keystream(bytes.length)
    const out = bytes.map((b, i) => b ^ ks[i])
    return Buffer.from(out).toString('hex')
  }

  decrypt(ciphertext: string): string {
    const bytes = new Uint8Array(Buffer.from(ciphertext, 'hex'))
    const ks = this.keystream(bytes.length)
    const out = bytes.map((b, i) => b ^ ks[i])
    return new TextDecoder().decode(out)
  }
}
