import { Cipher } from '../src/index'

test('AES-GCM round-trip', async () => {
  const key = Cipher.AESGCM.generateKey()
  const nonce = Cipher.AESGCM.generateNonce()
  const aesgcm = new Cipher.AESGCM(key, nonce)
  const plaintext = 'hello world'
  const encrypted = await aesgcm.encrypt(plaintext)
  const decrypted = await aesgcm.decrypt(encrypted)
  expect(decrypted).toBe(plaintext)
})

test('AES-GCM rejects wrong key size', () => {
  expect(
    () => new Cipher.AESGCM(new Uint8Array(16), new Uint8Array(12))
  ).toThrow()
})
