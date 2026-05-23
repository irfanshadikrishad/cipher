import { Cipher } from '../src/index'

test('Autokey round-trip', () => {
  const autokey = new Cipher.Autokey('secret')
  const plaintext = 'hello world'
  expect(autokey.decrypt(autokey.encrypt(plaintext))).toBe(plaintext)
})

test('Autokey round-trip with longer text', () => {
  const autokey = new Cipher.Autokey('key')
  const plaintext = 'the quick brown fox jumps over the lazy dog'
  expect(autokey.decrypt(autokey.encrypt(plaintext))).toBe(plaintext)
})

test('Autokey rejects numeric key', () => {
  expect(() => new Cipher.Autokey('key123')).toThrow()
})
