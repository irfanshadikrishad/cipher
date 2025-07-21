import { Cipher } from '../src/index'

test('Playfair', () => {
  const playfair = new Cipher.Playfair('IJKL')
  const plaintext = 'hello world'
  const encrypt = playfair.encrypt(plaintext)
  const decrypt = playfair.decrypt(encrypt)

  expect(decrypt).toBe(decrypt)
})
