import { Cipher } from '../src/index'

test('ChaCha20 round-trip', () => {
  const key = Cipher.ChaCha20.generateKey()
  const nonce = Cipher.ChaCha20.generateNonce()
  const chacha = new Cipher.ChaCha20(key, nonce)
  const plaintext = 'hello world'
  expect(chacha.decrypt(chacha.encrypt(plaintext))).toBe(plaintext)
})

test('ChaCha20 round-trip with longer text', () => {
  const key = Cipher.ChaCha20.generateKey()
  const nonce = Cipher.ChaCha20.generateNonce()
  const chacha = new Cipher.ChaCha20(key, nonce)
  const plaintext = 'the quick brown fox jumps over the lazy dog'
  expect(chacha.decrypt(chacha.encrypt(plaintext))).toBe(plaintext)
})

test('ChaCha20 rejects wrong key size', () => {
  expect(
    () => new Cipher.ChaCha20(new Uint8Array(16), new Uint8Array(12))
  ).toThrow()
})
