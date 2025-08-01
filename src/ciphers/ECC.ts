import crypto from 'crypto'
import { Cipher } from '../Cipher.js'

export class ECC extends Cipher {
  private recipientPublicKey?: CryptoKey
  private ownPrivateKey?: CryptoKey
  static recipientPublicKey: string
  static ownPrivateKey: string

  constructor(recipientPublicKey?: CryptoKey, ownPrivateKey?: CryptoKey) {
    super()
    this.recipientPublicKey = recipientPublicKey
    this.ownPrivateKey = ownPrivateKey
  }

  static async generate(): Promise<ECC> {
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      { name: 'ECDH', namedCurve: 'P-256' },
      true,
      ['deriveKey', 'deriveBits']
    )
    return new ECC(publicKey, privateKey)
  }

  async encrypt(plaintext: string): Promise<string> {
    if (!this.recipientPublicKey)
      throw new Error('Recipient public key not set')
    const ephemeral = await ECC.generate()

    const sharedKey = await crypto.subtle.deriveKey(
      { name: 'ECDH', public: this.recipientPublicKey },
      ephemeral.ownPrivateKey!,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt']
    )

    const iv = crypto.getRandomValues(new Uint8Array(12))
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      sharedKey,
      new TextEncoder().encode(plaintext)
    )

    const payload = {
      iv: ECC.bufToHex(iv),
      ciphertext: ECC.bufToHex(new Uint8Array(encrypted)),
      ephemeralPublicHex: await ephemeral.exportPublicKey(),
    }

    return JSON.stringify(payload)
  }

  async decrypt(data: string): Promise<string> {
    if (!this.ownPrivateKey) throw new Error('Own private key not set')

    const { iv, ciphertext, ephemeralPublicHex } = JSON.parse(data)
    const ephemeralPubKey = await ECC.importPublicKey(ephemeralPublicHex)

    const sharedKey = await crypto.subtle.deriveKey(
      { name: 'ECDH', public: ephemeralPubKey },
      this.ownPrivateKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    )

    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: ECC.hexToBuf(iv) },
      sharedKey,
      ECC.hexToBuf(ciphertext)
    )

    return new TextDecoder().decode(decrypted)
  }

  async exportPublicKey(): Promise<string> {
    const raw = await crypto.subtle.exportKey(
      'raw',
      this.recipientPublicKey || this.ownPrivateKey!
    )
    return ECC.bufToHex(new Uint8Array(raw))
  }

  static async importPublicKey(hex: string): Promise<CryptoKey> {
    const raw = ECC.hexToBuf(hex)
    return crypto.subtle.importKey(
      'raw',
      raw,
      { name: 'ECDH', namedCurve: 'P-256' },
      true,
      []
    )
  }

  // Helpers
  static bufToHex(buf: Uint8Array): string {
    return [...buf].map((b) => b.toString(16).padStart(2, '0')).join('')
  }

  static hexToBuf(hex: string): Uint8Array {
    const bytes = new Uint8Array(hex.length / 2)
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16)
    }
    return bytes
  }
}
