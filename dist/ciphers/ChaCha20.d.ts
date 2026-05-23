import { Cipher } from '../Cipher.js';
export declare class ChaCha20 extends Cipher {
    private key;
    private nonce;
    private counter;
    constructor(key: Uint8Array | string, nonce: Uint8Array | string, counter?: number);
    private static rotl;
    private static quarterRound;
    private block;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
    static generateKey(): string;
    static generateNonce(): string;
}
