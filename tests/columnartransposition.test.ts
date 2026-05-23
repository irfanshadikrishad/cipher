import { Cipher } from '../src/index'

test('ColumnarTransposition round-trip', () => {
  const ct = new Cipher.ColumnarTransposition('zebras')
  const plaintext = 'wearediscoveredfleeatonce'
  expect(ct.decrypt(ct.encrypt(plaintext))).toBe(plaintext)
})

test('ColumnarTransposition round-trip with padding', () => {
  const ct = new Cipher.ColumnarTransposition('key')
  const plaintext = 'hello'
  expect(ct.decrypt(ct.encrypt(plaintext))).toBe(plaintext)
})

test('ColumnarTransposition rejects numeric key', () => {
  expect(() => new Cipher.ColumnarTransposition('key123')).toThrow()
})
