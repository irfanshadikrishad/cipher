import { Cipher } from '../Cipher.js';
export declare class Nihilist extends Cipher {
    private key;
    private keyword;
    constructor(key: string, keyword: string);
    private prepareKey;
    private getCoordinates;
    private textToNumbers;
    private numbersToText;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
}
