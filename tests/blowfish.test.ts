import { Cipher } from '../src/index'

test('Blowfish round-trip', () => {
  const bf = new Cipher.Blowfish('secretkey')
  const plaintext = 'hello world'
  expect(bf.decrypt(bf.encrypt(plaintext))).toBe(plaintext)
})

test('Blowfish round-trip with longer text', () => {
  const bf = new Cipher.Blowfish('myblowfishkey')
  const plaintext = 'the quick brown fox jumps over the lazy dog'
  expect(bf.decrypt(bf.encrypt(plaintext))).toBe(plaintext)
})

test('Blowfish rejects key longer than 56 bytes', () => {
  expect(() => new Cipher.Blowfish('a'.repeat(57))).toThrow()
})
