import { Cipher } from '../Cipher.js';
export declare class Blowfish extends Cipher {
    private P;
    private S;
    constructor(key: Uint8Array | string);
    private F;
    private encryptBlock;
    private decryptBlock;
    private expandKey;
    private processBytes;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
}
