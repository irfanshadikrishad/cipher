import { Caesar } from "./ciphers/Caesar"
import { Atbash } from "./ciphers/Atbash"
import { Playfair } from "./ciphers/Playfair"
import { Vigenere } from "./ciphers/Vigenere"
export declare abstract class Cipher {
  static Caesar: typeof Caesar
  static Atbash: typeof Atbash
  static Playfair: typeof Playfair
  static Vigenere: typeof Vigenere
  abstract encrypt(text: string): string
  abstract decrypt(text: string): string
}
