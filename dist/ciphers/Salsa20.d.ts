import { Cipher } from '../Cipher.js';
export declare class Salsa20 extends Cipher {
    private key;
    private nonce;
    private counter;
    constructor(key: Uint8Array | string, nonce: Uint8Array | string, counter?: number);
    private static rotateLeft;
    private static quarterRound;
    private generateKeystreamBlock;
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
    static generateKey(): string;
    static generateNonce(): string;
    static encodeBase64(uint8array: Uint8Array): string;
    static decodeBase64(base64: string): Uint8Array;
}
