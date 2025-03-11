import { Caesar } from "./ciphers/Caesar.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"
import { Vigenere } from "./ciphers/Vigenere.js"
import { Alphabet } from "./ciphers/Alphabet.js"
import { Salsa20 } from "./ciphers/Salsa20.js"
import { ADFGVX } from "./ciphers/ADFGVX.js"

export abstract class Cipher {
  /**
   * Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet.
   * @param shift Number of places to shift the alphabet
   */
  static Caesar: typeof Caesar
  /**
   * Atbash cipher is a substitution cipher where the alphabet is reversed.
   * A -> Z, B -> Y, C -> X, ..., Z -> A
   */
  static Atbash: typeof Atbash
  /**
   * Playfair cipher is a digraph substitution cipher that encrypts pairs of letters.
   * @param key 5x5 grid of letters
   */
  static Playfair: typeof Playfair
  /**
   * Vigenère cipher is a polyalphabetic substitution cipher that encrypts the plaintext with a keyword.
   * @param key Keyword to encrypt the plaintext
   */
  static Vigenere: typeof Vigenere
  /**
   * "The Alphabet Cipher" was a brief study published by Lewis Carroll in 1868, describing how to use the alphabet to send encrypted codes.
   */
  static Alphabet: typeof Alphabet
  /**
   * Salsa20 is a stream cipher developed by Daniel J. Bernstein.
   * It is widely used in the industry and is considered secure.
   * @param key 256-bit key
   * @param nonce 64-bit nonce
   * @param counter 64-bit counter
   */
  static Salsa20: typeof Salsa20
  /**
   * The ADFGVX cipher was a manually applied field cipher used by the Imperial German Army during World War I.
   * @param key - more than 1 characters long (more length, more secure)
   * @param codeword - 36 characters long
   */
  static ADFGVX: typeof ADFGVX

  abstract encrypt(text: string): string | Uint8Array
  abstract decrypt(text: string | Uint8Array): string
}
