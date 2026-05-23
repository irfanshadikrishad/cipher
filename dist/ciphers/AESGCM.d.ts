import { Cipher } from '../Cipher.js';
export declare class AESGCM extends Cipher {
    private keyMaterial;
    private nonce;
    constructor(key: Uint8Array | string, nonce: Uint8Array | string);
    private importKey;
    encrypt(plaintext: string): Promise<string>;
    decrypt(ciphertext: string): Promise<string>;
    static generateKey(): string;
    static generateNonce(): string;
}
