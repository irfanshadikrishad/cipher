import { Cipher } from '../src/index'

test('Beaufort round-trip', () => {
  const beaufort = new Cipher.Beaufort('secret')
  const plaintext = 'hello world'
  expect(beaufort.decrypt(beaufort.encrypt(plaintext))).toBe(plaintext)
})

test('Beaufort is reciprocal (encrypt twice returns original)', () => {
  const beaufort = new Cipher.Beaufort('key')
  const plaintext = 'ATTACK AT DAWN'
  expect(beaufort.encrypt(beaufort.encrypt(plaintext))).toBe(plaintext)
})

test('Beaufort rejects non-letter key', () => {
  expect(() => new Cipher.Beaufort('key123')).toThrow()
})
