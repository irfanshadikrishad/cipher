import { Cipher } from '../Cipher.js';
export declare class DES extends Cipher {
    private key;
    constructor(key: string);
    encrypt(text: string): string;
    decrypt(text: string): string;
    private pad;
    private unpad;
    private feistel;
    private getRoundKey;
    private f;
    private permute;
    private stringToBigInt;
    private bigIntToString;
}
