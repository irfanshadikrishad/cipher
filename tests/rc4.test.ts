import { Cipher } from '../src/index'

test('RC4 round-trip', () => {
  const rc4 = new Cipher.RC4('secret')
  const plaintext = 'hello world'
  expect(rc4.decrypt(rc4.encrypt(plaintext))).toBe(plaintext)
})

test('RC4 round-trip with unicode', () => {
  const rc4 = new Cipher.RC4('mykey')
  const plaintext = 'TypeScript cipher library'
  expect(rc4.decrypt(rc4.encrypt(plaintext))).toBe(plaintext)
})

test('RC4 rejects empty key', () => {
  expect(() => new Cipher.RC4('')).toThrow()
})
