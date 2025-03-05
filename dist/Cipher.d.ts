import { Ceaser } from "./ciphers/Ceaser.js"
import { Atbash } from "./ciphers/Atbash.js"
export declare abstract class Cipher {
  static Ceaser: typeof Ceaser
  static Atbash: typeof Atbash
  abstract encrypt(text: string): string
  abstract decrypt(text: string): string
}
