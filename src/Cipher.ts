import { Caesar } from "./ciphers/Ceaser.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"

export abstract class Cipher {
  static Caesar: typeof Caesar
  static Atbash: typeof Atbash
  static Playfair: typeof Playfair

  abstract encrypt(text: string): string
  abstract decrypt(text: string): string
}
