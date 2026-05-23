import { Cipher } from '../src/index'

test('RSA round-trip', async () => {
  const rsa = await Cipher.RSA.generate(2048)
  const plaintext = 'hello world'
  const encrypted = await rsa.encrypt(plaintext)
  const decrypted = await rsa.decrypt(encrypted)
  expect(decrypted).toBe(plaintext)
}, 15000)

test('RSA export/import public key', async () => {
  const rsa = await Cipher.RSA.generate(2048)
  const pubHex = await rsa.exportPublicKey()
  const pubOnly = await Cipher.RSA.importPublicKey(pubHex)
  const encrypted = await pubOnly.encrypt('test message')
  const decrypted = await rsa.decrypt(encrypted)
  expect(decrypted).toBe('test message')
}, 15000)
