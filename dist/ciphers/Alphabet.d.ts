import { Cipher } from "../Cipher.js";
export declare class Alphabet extends Cipher {
    private keyword;
    private static alphabet;
    constructor(keyword: string);
    /**
     * Encrypts a message using the Alphabet Cipher.
     * @param message - The plaintext message to encrypt.
     * @returns The encrypted ciphertext.
     */
    encrypt(message: string): string;
    /**
     * Decrypts a message using the Alphabet Cipher.
     * @param ciphertext - The encrypted message to decrypt.
     * @returns The original plaintext message.
     */
    decrypt(ciphertext: string): string;
    /**
     * Generates the Vigenère table for encoding and decoding.
     */
    private static getVigenereTable;
}
