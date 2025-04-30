import { Cipher } from "../Cipher.js"
export declare class Atbash extends Cipher {
  encrypt(text: string): string
  decrypt(text: string): string
}
