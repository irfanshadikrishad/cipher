import { Buffer } from 'buffer';
import { webcrypto } from 'node:crypto';
import { Cipher } from '../Cipher.js';
const crypto = webcrypto;
export class AESGCM extends Cipher {
    constructor(key, nonce) {
        super();
        if (typeof key === 'string')
            key = new Uint8Array(Buffer.from(key, 'hex'));
        if (typeof nonce === 'string')
            nonce = new Uint8Array(Buffer.from(nonce, 'hex'));
        if (key.length !== 32)
            throw new Error('Key must be 32 bytes (256-bit).');
        if (nonce.length !== 12)
            throw new Error('Nonce must be 12 bytes (96-bit).');
        this.keyMaterial = key;
        this.nonce = nonce;
    }
    async importKey() {
        return crypto.subtle.importKey('raw', this.keyMaterial.buffer, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
    }
    async encrypt(plaintext) {
        const key = await this.importKey();
        const encoded = new TextEncoder().encode(plaintext);
        const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: this.nonce.buffer }, key, encoded.buffer);
        return Buffer.from(new Uint8Array(ciphertext)).toString('hex');
    }
    async decrypt(ciphertext) {
        const key = await this.importKey();
        const bytes = new Uint8Array(Buffer.from(ciphertext, 'hex'));
        const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: this.nonce.buffer }, key, bytes.buffer);
        return new TextDecoder().decode(decrypted);
    }
    static generateKey() {
        return Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString('hex');
    }
    static generateNonce() {
        return Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString('hex');
    }
}
