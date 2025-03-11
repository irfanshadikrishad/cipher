import { Cipher } from "../Cipher.js"
export declare class ADFGVX extends Cipher {
  private key
  private polybiusSquare
  private reverseSquare
  private adfgvx
  constructor(key: string, alphabet: string)
  private createPolybiusSquare
  private columnarTranspose
  encrypt(plaintext: string): string
  decrypt(ciphertext: string): string
}
