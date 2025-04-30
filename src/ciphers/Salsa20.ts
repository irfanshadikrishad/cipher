import { Cipher } from "../Cipher.js"
import crypto from "crypto"
import { Buffer } from "buffer"

export class Salsa20 extends Cipher {
  private key: Uint32Array
  private nonce: Uint32Array
  private counter: number

  constructor(
    key: Uint8Array | string,
    nonce: Uint8Array | string,
    counter: number = 0
  ) {
    super()

    if (typeof key === "string") key = Buffer.from(key, "base64")
    if (typeof nonce === "string") nonce = Buffer.from(nonce, "base64")

    if (key.length !== 32) throw new Error("Key must be 32 bytes (256-bit).")
    if (nonce.length !== 8) throw new Error("Nonce must be 8 bytes (64-bit).")

    this.key = new Uint32Array(new Uint8Array(key).buffer)
    this.nonce = new Uint32Array(new Uint8Array(nonce).buffer)
    this.counter = counter
  }

  private static rotateLeft(x: number, n: number): number {
    return (x << n) | (x >>> (32 - n))
  }

  private static quarterRound(
    state: Uint32Array,
    a: number,
    b: number,
    c: number,
    d: number
  ) {
    state[b] ^= Salsa20.rotateLeft(state[a] + state[d], 7)
    state[c] ^= Salsa20.rotateLeft(state[b] + state[a], 9)
    state[d] ^= Salsa20.rotateLeft(state[c] + state[b], 13)
    state[a] ^= Salsa20.rotateLeft(state[d] + state[c], 18)
  }

  private generateKeystreamBlock(): Uint8Array {
    const constants = new Uint32Array([
      0x61707865, 0x3320646e, 0x79622d32, 0x6b206574,
    ]) // "expand 32-byte k"
    const state = new Uint32Array(16)

    state.set(constants, 0)
    state.set(this.key.slice(0, 4), 4)
    state.set(this.nonce, 8)
    state.set([this.counter, 0], 10)
    state.set(this.key.slice(4, 8), 12)

    const workingState = new Uint32Array(state)
    for (let i = 0; i < 10; i++) {
      Salsa20.quarterRound(workingState, 0, 4, 8, 12)
      Salsa20.quarterRound(workingState, 1, 5, 9, 13)
      Salsa20.quarterRound(workingState, 2, 6, 10, 14)
      Salsa20.quarterRound(workingState, 3, 7, 11, 15)
      Salsa20.quarterRound(workingState, 0, 5, 10, 15)
      Salsa20.quarterRound(workingState, 1, 6, 11, 12)
      Salsa20.quarterRound(workingState, 2, 7, 8, 13)
      Salsa20.quarterRound(workingState, 3, 4, 9, 14)
    }

    for (let i = 0; i < 16; i++) {
      workingState[i] += state[i]
    }

    this.counter++ // Increment counter for next block
    return new Uint8Array(workingState.buffer)
  }

  encrypt(plaintext: string): string {
    const textBytes = new TextEncoder().encode(plaintext)
    const ciphertext = new Uint8Array(textBytes.length)

    for (let i = 0; i < textBytes.length; i += 64) {
      const keystream = this.generateKeystreamBlock()
      const blockLength = Math.min(64, textBytes.length - i)
      for (let j = 0; j < blockLength; j++) {
        ciphertext[i + j] = textBytes[i + j] ^ keystream[j]
      }
    }

    return Salsa20.encodeBase64(ciphertext)
  }

  decrypt(ciphertext: string): string {
    const originalCounter = this.counter
    this.counter = 0

    const cipherUnit8Array = Salsa20.decodeBase64(ciphertext)
    const decryptedBytes = new Uint8Array(cipherUnit8Array.length)

    for (let i = 0; i < cipherUnit8Array.length; i += 64) {
      const keystream = this.generateKeystreamBlock()
      const blockLength = Math.min(64, cipherUnit8Array.length - i)
      for (let j = 0; j < blockLength; j++) {
        decryptedBytes[i + j] = cipherUnit8Array[i + j] ^ keystream[j]
      }
    }
    this.counter = originalCounter

    return new TextDecoder().decode(decryptedBytes)
  }

  static generateKey(): string {
    return Salsa20.encodeBase64(crypto.getRandomValues(new Uint8Array(32)))
  }

  static generateNonce(): string {
    return Salsa20.encodeBase64(crypto.getRandomValues(new Uint8Array(8)))
  }

  static encodeBase64(uint8array: Uint8Array): string {
    return Buffer.from(uint8array).toString("base64")
  }

  static decodeBase64(base64: string): Uint8Array {
    return new Uint8Array(Buffer.from(base64, "base64"))
  }
}
