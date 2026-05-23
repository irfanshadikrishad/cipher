import { Cipher } from '../src/index'

test('Affine round-trip', () => {
  const affine = new Cipher.Affine(5, 8)
  const plaintext = 'hello world'
  expect(affine.decrypt(affine.encrypt(plaintext))).toBe(plaintext)
})

test('Affine preserves case', () => {
  const affine = new Cipher.Affine(7, 3)
  const plaintext = 'Hello World'
  const decrypted = affine.decrypt(affine.encrypt(plaintext))
  expect(decrypted).toBe(plaintext)
})

test('Affine rejects invalid a', () => {
  expect(() => new Cipher.Affine(2, 5)).toThrow()
})
