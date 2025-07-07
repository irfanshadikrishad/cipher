import { Cipher } from '../Cipher.js';
export declare class ECC extends Cipher {
    private recipientPublicKey?;
    private ownPrivateKey?;
    static recipientPublicKey: string;
    static ownPrivateKey: string;
    constructor(recipientPublicKey?: CryptoKey, ownPrivateKey?: CryptoKey);
    static generate(): Promise<ECC>;
    encrypt(plaintext: string): Promise<string>;
    decrypt(data: string): Promise<string>;
    exportPublicKey(): Promise<string>;
    static importPublicKey(hex: string): Promise<CryptoKey>;
    static bufToHex(buf: Uint8Array): string;
    static hexToBuf(hex: string): Uint8Array;
}
