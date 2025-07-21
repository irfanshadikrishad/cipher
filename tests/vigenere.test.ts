import { Cipher } from '../src/index'

test('Caesar', () => {
  const vigenere = new Cipher.Vigenere('MIMO')
  const plaintext = 'hello world'
  const encrypt = vigenere.encrypt(plaintext)
  const decrypt = vigenere.decrypt(encrypt)

  expect(decrypt).toBe(plaintext)
})
