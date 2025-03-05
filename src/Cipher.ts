import { Caesar } from "./ciphers/Ceaser.js"
import { Atbash } from "./ciphers/Atbash.js"

export abstract class Cipher {
  static Caesar: typeof Caesar
  static Atbash: typeof Atbash

  abstract encrypt(text: string): string
  abstract decrypt(text: string): string
}
