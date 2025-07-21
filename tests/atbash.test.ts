import { Cipher } from '../src/index'

test('Atbash', () => {
  const atbash = new Cipher.Atbash()
  const plaintext = 'hello world'
  const encrypt = atbash.encrypt(plaintext)
  const decrypt = atbash.decrypt(encrypt)

  expect(decrypt).toBe(plaintext)
})
