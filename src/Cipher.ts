import { Caesar } from "./ciphers/Caesar.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"
import { Vigenere } from "./ciphers/Vigenere.js"

export abstract class Cipher {
  static Caesar: typeof Caesar
  static Atbash: typeof Atbash
  static Playfair: typeof Playfair
  static Vigenere: typeof Vigenere

  abstract encrypt(text: string): string
  abstract decrypt(text: string): string
}
