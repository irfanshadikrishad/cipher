import { webcrypto } from 'node:crypto';
import { Cipher } from '../Cipher.js';
type NodeCryptoKey = webcrypto.CryptoKey;
export declare class RSA extends Cipher {
    private publicKey?;
    private privateKey?;
    constructor(publicKey?: NodeCryptoKey, privateKey?: NodeCryptoKey);
    static generate(modulusLength?: 2048 | 4096): Promise<RSA>;
    encrypt(plaintext: string): Promise<string>;
    decrypt(ciphertext: string): Promise<string>;
    exportPublicKey(): Promise<string>;
    exportPrivateKey(): Promise<string>;
    static importPublicKey(hex: string): Promise<RSA>;
}
export {};
