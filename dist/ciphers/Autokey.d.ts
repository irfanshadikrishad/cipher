import { Cipher } from '../Cipher.js';
export declare class Autokey extends Cipher {
    private key;
    constructor(key: string);
    encrypt(text: string): string;
    decrypt(text: string): string;
}
