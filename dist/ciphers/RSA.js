import { webcrypto } from 'node:crypto';
import { Cipher } from '../Cipher.js';
const crypto = webcrypto;
export class RSA extends Cipher {
    constructor(publicKey, privateKey) {
        super();
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    static async generate(modulusLength = 2048) {
        const { publicKey, privateKey } = await crypto.subtle.generateKey({
            name: 'RSA-OAEP',
            modulusLength,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: 'SHA-256',
        }, true, ['encrypt', 'decrypt']);
        return new RSA(publicKey, privateKey);
    }
    async encrypt(plaintext) {
        if (!this.publicKey)
            throw new Error('Public key not set.');
        const encoded = new TextEncoder().encode(plaintext);
        const ciphertext = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, this.publicKey, encoded.buffer);
        return Buffer.from(new Uint8Array(ciphertext)).toString('hex');
    }
    async decrypt(ciphertext) {
        if (!this.privateKey)
            throw new Error('Private key not set.');
        const bytes = new Uint8Array(Buffer.from(ciphertext, 'hex'));
        const decrypted = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, this.privateKey, bytes.buffer);
        return new TextDecoder().decode(decrypted);
    }
    async exportPublicKey() {
        if (!this.publicKey)
            throw new Error('No public key available.');
        const spki = await crypto.subtle.exportKey('spki', this.publicKey);
        return Buffer.from(new Uint8Array(spki)).toString('hex');
    }
    async exportPrivateKey() {
        if (!this.privateKey)
            throw new Error('No private key available.');
        const pkcs8 = await crypto.subtle.exportKey('pkcs8', this.privateKey);
        return Buffer.from(new Uint8Array(pkcs8)).toString('hex');
    }
    static async importPublicKey(hex) {
        const key = await crypto.subtle.importKey('spki', new Uint8Array(Buffer.from(hex, 'hex')).buffer, { name: 'RSA-OAEP', hash: 'SHA-256' }, true, ['encrypt']);
        return new RSA(key, undefined);
    }
}
