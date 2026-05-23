import { ADFGVX } from './ciphers/ADFGVX.js';
import { AES } from './ciphers/AES.js';
import { AESGCM } from './ciphers/AESGCM.js';
import { Affine } from './ciphers/Affine.js';
import { Alphabet } from './ciphers/Alphabet.js';
import { Atbash } from './ciphers/Atbash.js';
import { Autokey } from './ciphers/Autokey.js';
import { Beaufort } from './ciphers/Beaufort.js';
import { Bifid } from './ciphers/Bifid.js';
import { Blowfish } from './ciphers/Blowfish.js';
import { Caesar } from './ciphers/Caesar.js';
import { ChaCha20 } from './ciphers/ChaCha20.js';
import { ColumnarTransposition } from './ciphers/ColumnarTransposition.js';
import { DES } from './ciphers/DES.js';
import { ECC } from './ciphers/ECC.js';
import { Nihilist } from './ciphers/Nihilist.js';
import { Playfair } from './ciphers/Playfair.js';
import { RailFence } from './ciphers/RailFence.js';
import { RC4 } from './ciphers/RC4.js';
import { ROT13 } from './ciphers/ROT13.js';
import { RSA } from './ciphers/RSA.js';
import { Salsa20 } from './ciphers/Salsa20.js';
import { Vigenere } from './ciphers/Vigenere.js';
export declare abstract class Cipher {
    /**
     * Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet.
     * @param shift Number of places to shift the alphabet
     */
    static Caesar: typeof Caesar;
    /**
     * Atbash cipher is a substitution cipher where the alphabet is reversed.
     * A -> Z, B -> Y, C -> X, ..., Z -> A
     */
    static Atbash: typeof Atbash;
    /**
     * Playfair cipher is a digraph substitution cipher that encrypts pairs of letters.
     * @param key 5x5 grid of letters
     */
    static Playfair: typeof Playfair;
    /**
     * Vigenère cipher is a polyalphabetic substitution cipher that encrypts the plaintext with a keyword.
     * @param key Keyword to encrypt the plaintext
     */
    static Vigenere: typeof Vigenere;
    /**
     * "The Alphabet Cipher" was a brief study published by Lewis Carroll in 1868, describing how to use the alphabet to send encrypted codes.
     */
    static Alphabet: typeof Alphabet;
    /**
     * Salsa20 is a stream cipher developed by Daniel J. Bernstein.
     * It is widely used in the industry and is considered secure.
     * @param key 256-bit key
     * @param nonce 64-bit nonce
     * @param counter 64-bit counter
     */
    static Salsa20: typeof Salsa20;
    /**
     * The ADFGVX cipher was a manually applied field cipher used by the Imperial German Army during World War I.
     * @param key - more than 1 characters long (more length, more secure)
     * @param codeword - 36 characters long
     */
    static ADFGVX: typeof ADFGVX;
    /**
     * Advanced Encryption Standard (AES) is a symmetric encryption algorithm.
     * @param key 256-bit (32 byte) key
     * @param iv 128-bit (16 byte) initialization vector
     */
    static AES: typeof AES;
    /**
     * Data Encryption Standard (DES) is a symmetric encryption algorithm.
     * @param key 8 characters long
     * @param iv 8 characters long
     */
    static DES: typeof DES;
    /**
     * Elliptic-curve cryptography (ECC) is an approach to public-key cryptography based on the algebraic structure of elliptic curves over finite fields.
     */
    static ECC: typeof ECC;
    /**
     * ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the Latin alphabet.
     */
    static ROT13: typeof ROT13;
    /**
     * Nihilist cipher is a manually operated symmetric encryption cipher, originally used by Russian Nihilists in the 1880s to organize terrorism against the tsarist regime.
     */
    static Nihilist: typeof Nihilist;
    /**
     * Rail Fence cipher is a transposition cipher that writes plaintext in a zigzag pattern across a number of rails, then reads off each rail in order.
     * @param rails Number of rails (must be >= 2)
     */
    static RailFence: typeof RailFence;
    /**
     * Affine cipher is a substitution cipher where each letter is encrypted using the formula E(x) = (a*x + b) mod 26.
     * @param a Multiplicative key, must be coprime with 26
     * @param b Additive key
     */
    static Affine: typeof Affine;
    /**
     * Beaufort cipher is a reciprocal polyalphabetic substitution cipher — encrypt and decrypt use the same operation.
     * @param key Keyword string (letters only)
     */
    static Beaufort: typeof Beaufort;
    /**
     * Autokey cipher is a polyalphabetic cipher where the plaintext extends the key, eliminating the periodic key weakness of Vigenere.
     * @param key Initial keyword string (letters only)
     */
    static Autokey: typeof Autokey;
    /**
     * Columnar Transposition cipher fills plaintext into a grid row-by-row and reads columns in keyword-sorted order.
     * @param key Keyword string (letters only)
     */
    static ColumnarTransposition: typeof ColumnarTransposition;
    /**
     * Bifid cipher combines a Polybius square with fractionation to encrypt letters using row and column coordinates.
     * @param key Optional keyword to build the 5x5 Polybius square
     */
    static Bifid: typeof Bifid;
    /**
     * RC4 (Rivest Cipher 4) is a symmetric stream cipher using key-scheduling and pseudo-random generation arrays.
     * @param key Key string
     */
    static RC4: typeof RC4;
    /**
     * Blowfish is a symmetric block cipher with a 64-bit block size and variable-length key (1–56 bytes), using a 16-round Feistel network.
     * @param key 1–56 byte key
     */
    static Blowfish: typeof Blowfish;
    /**
     * ChaCha20 is a modern stream cipher and successor to Salsa20, used in TLS 1.3 and WireGuard.
     * @param key 256-bit key (base64)
     * @param nonce 96-bit nonce (base64)
     * @param counter Initial counter value
     */
    static ChaCha20: typeof ChaCha20;
    /**
     * AES-GCM is an authenticated encryption (AEAD) mode of AES providing both confidentiality and integrity.
     * @param key 256-bit key (hex)
     * @param nonce 96-bit nonce (hex)
     */
    static AESGCM: typeof AESGCM;
    /**
     * RSA is an asymmetric public-key cipher based on the difficulty of factoring large integers.
     * Use RSA.generate() to create a key pair.
     */
    static RSA: typeof RSA;
    abstract encrypt(text: string): string | Promise<string>;
    abstract decrypt(text: string): string | Promise<string>;
}
