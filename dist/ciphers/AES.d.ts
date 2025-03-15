import { Cipher } from "../Cipher.js"
export declare class AES extends Cipher {
  private key
  private iv
  constructor(key: string, iv: string)
  encrypt(plaintext: string): string
  decrypt(ciphertext: string): string
}
