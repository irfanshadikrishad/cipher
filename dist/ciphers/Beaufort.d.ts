import { Cipher } from '../Cipher.js';
export declare class Beaufort extends Cipher {
    private key;
    constructor(key: string);
    private process;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
