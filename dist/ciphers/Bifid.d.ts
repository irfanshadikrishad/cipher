import { Cipher } from '../Cipher.js';
export declare class Bifid extends Cipher {
    private square;
    private charPos;
    constructor(key?: string);
    private toLetters;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
