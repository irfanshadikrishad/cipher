import { Cipher } from '../src/index'

test('ROT13', () => {
  const rot13 = new Cipher.ROT13()
  const plaintext = 'Hello World!'
  const encrypt = rot13.encrypt(plaintext)
  const decrypt = rot13.decrypt(encrypt)

  expect(decrypt).toBe(plaintext)
})
