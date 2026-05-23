import { Cipher } from '../Cipher.js';
export declare class RC4 extends Cipher {
    private key;
    constructor(key: string);
    private keystream;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
}
