import { webcrypto } from 'node:crypto'
import { Cipher } from '../Cipher.js'

const crypto = webcrypto
type NodeCryptoKey = webcrypto.CryptoKey

export class AESGCM extends Cipher {
  private keyMaterial: Uint8Array
  private nonce: Uint8Array

  constructor(key: Uint8Array | string, nonce: Uint8Array | string) {
    super()
    if (typeof key === 'string') key = new Uint8Array(Buffer.from(key, 'hex'))
    if (typeof nonce === 'string')
      nonce = new Uint8Array(Buffer.from(nonce, 'hex'))
    if (key.length !== 32) throw new Error('Key must be 32 bytes (256-bit).')
    if (nonce.length !== 12) throw new Error('Nonce must be 12 bytes (96-bit).')
    this.keyMaterial = key
    this.nonce = nonce
  }

  private async importKey(): Promise<NodeCryptoKey> {
    return crypto.subtle.importKey(
      'raw',
      this.keyMaterial.buffer as ArrayBuffer,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    ) as Promise<NodeCryptoKey>
  }

  async encrypt(plaintext: string): Promise<string> {
    const key = await this.importKey()
    const encoded = new TextEncoder().encode(plaintext)
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: this.nonce.buffer as ArrayBuffer },
      key,
      encoded.buffer as ArrayBuffer
    )
    return Buffer.from(new Uint8Array(ciphertext)).toString('hex')
  }

  async decrypt(ciphertext: string): Promise<string> {
    const key = await this.importKey()
    const bytes = new Uint8Array(Buffer.from(ciphertext, 'hex'))
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: this.nonce.buffer as ArrayBuffer },
      key,
      bytes.buffer as ArrayBuffer
    )
    return new TextDecoder().decode(decrypted)
  }

  static generateKey(): string {
    return Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString(
      'hex'
    )
  }

  static generateNonce(): string {
    return Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString(
      'hex'
    )
  }
}
