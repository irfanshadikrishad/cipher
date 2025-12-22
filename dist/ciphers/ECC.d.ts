import { webcrypto } from 'node:crypto';
import { Cipher } from '../Cipher.js';
type NodeCryptoKey = webcrypto.CryptoKey;
export declare class ECC extends Cipher {
    private recipientPublicKey?;
    private ownPrivateKey?;
    static recipientPublicKey: string;
    static ownPrivateKey: string;
    constructor(recipientPublicKey?: NodeCryptoKey, ownPrivateKey?: NodeCryptoKey);
    static generate(): Promise<ECC>;
    encrypt(plaintext: string): Promise<string>;
    decrypt(data: string): Promise<string>;
    exportPublicKey(): Promise<string>;
    static importPublicKey(hex: string): Promise<NodeCryptoKey>;
    static bufToHex(buf: Uint8Array): string;
    static hexToBuf(hex: string): ArrayBuffer;
}
export {};
