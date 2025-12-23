import { ADFGVX } from './ciphers/ADFGVX.js'
import { AES } from './ciphers/AES.js'
import { Alphabet } from './ciphers/Alphabet.js'
import { Atbash } from './ciphers/Atbash.js'
import { Caesar } from './ciphers/Caesar.js'
import { DES } from './ciphers/DES.js'
import { ECC } from './ciphers/ECC.js'
import { Nihilist } from './ciphers/Nihilist.js'
import { Playfair } from './ciphers/Playfair.js'
import { ROT13 } from './ciphers/ROT13.js'
import { Salsa20 } from './ciphers/Salsa20.js'
import { Vigenere } from './ciphers/Vigenere.js'

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
  /**
   * Advanced Encryption Standard (AES) is a symmetric encryption algorithm.
   * @param key 256-bit (32 byte) key
   * @param iv 128-bit (16 byte) initialization vector
   */
  static AES: typeof AES
  /**
   * Data Encryption Standard (DES) is a symmetric encryption algorithm.
   * @param key 8 characters long
   * @param iv 8 characters long
   */
  static DES: typeof DES
  /**
   * Elliptic-curve cryptography (ECC) is an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields.
   */
  static ECC: typeof ECC
  /**
   * ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the Latin alphabet.
   */
  static ROT13: typeof ROT13
  /**
   * Nihilist cipher is a manually operated symmetric encryption cipher, originally used by Russian Nihilists in the 1880s to organize terrorism against the tsarist regime.
   */
  static Nihilist: typeof Nihilist

  abstract encrypt(text: string): string | Promise<string>
  abstract decrypt(text: string): string | Promise<string>
}
