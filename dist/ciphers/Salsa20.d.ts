import { Cipher } from "../Cipher.js"
export declare class Salsa20 extends Cipher {
  private key
  private nonce
  private counter
  constructor(key: Uint8Array, nonce: Uint8Array, counter?: number)
  private static rotateLeft
  private static quarterRound
  private generateKeystreamBlock
  encrypt(plaintext: string): Uint8Array
  decrypt(ciphertext: Uint8Array): string
  resetCounter(): void
}
