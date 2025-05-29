import { Cipher } from "../Cipher.js";
export declare class Vigenere extends Cipher {
    private key;
    constructor(key: string);
    private repeatKey;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
