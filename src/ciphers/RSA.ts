import { Buffer } from 'buffer'
import { webcrypto } from 'node:crypto'
import { Cipher } from '../Cipher.js'

const crypto = webcrypto
type NodeCryptoKey = webcrypto.CryptoKey

export class RSA extends Cipher {
  private publicKey?: NodeCryptoKey
  private privateKey?: NodeCryptoKey

  constructor(publicKey?: NodeCryptoKey, privateKey?: NodeCryptoKey) {
    super()
    this.publicKey = publicKey
    this.privateKey = privateKey
  }

  static async generate(modulusLength: 2048 | 4096 = 2048): Promise<RSA> {
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: 'SHA-256',
      },
      true,
      ['encrypt', 'decrypt']
    )
    return new RSA(publicKey as NodeCryptoKey, privateKey as NodeCryptoKey)
  }

  async encrypt(plaintext: string): Promise<string> {
    if (!this.publicKey) throw new Error('Public key not set.')
    const encoded = new TextEncoder().encode(plaintext)
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      this.publicKey,
      encoded.buffer as ArrayBuffer
    )
    return Buffer.from(new Uint8Array(ciphertext)).toString('hex')
  }

  async decrypt(ciphertext: string): Promise<string> {
    if (!this.privateKey) throw new Error('Private key not set.')
    const bytes = new Uint8Array(Buffer.from(ciphertext, 'hex'))
    const decrypted = await crypto.subtle.decrypt(
      { name: 'RSA-OAEP' },
      this.privateKey,
      bytes.buffer as ArrayBuffer
    )
    return new TextDecoder().decode(decrypted)
  }

  async exportPublicKey(): Promise<string> {
    if (!this.publicKey) throw new Error('No public key available.')
    const spki = await crypto.subtle.exportKey('spki', this.publicKey)
    return Buffer.from(new Uint8Array(spki)).toString('hex')
  }

  async exportPrivateKey(): Promise<string> {
    if (!this.privateKey) throw new Error('No private key available.')
    const pkcs8 = await crypto.subtle.exportKey('pkcs8', this.privateKey)
    return Buffer.from(new Uint8Array(pkcs8)).toString('hex')
  }

  static async importPublicKey(hex: string): Promise<RSA> {
    const key = await crypto.subtle.importKey(
      'spki',
      new Uint8Array(Buffer.from(hex, 'hex')).buffer as ArrayBuffer,
      { name: 'RSA-OAEP', hash: 'SHA-256' },
      true,
      ['encrypt']
    )
    return new RSA(key as NodeCryptoKey, undefined)
  }
}
