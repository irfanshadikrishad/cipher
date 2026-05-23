import { Cipher } from '../src/index'

test('RailFence round-trip (3 rails)', () => {
  const rf = new Cipher.RailFence(3)
  const plaintext = 'hello world'
  expect(rf.decrypt(rf.encrypt(plaintext))).toBe(plaintext)
})

test('RailFence round-trip (2 rails)', () => {
  const rf = new Cipher.RailFence(2)
  const plaintext = 'WE ARE DISCOVERED FLEE AT ONCE'
  expect(rf.decrypt(rf.encrypt(plaintext))).toBe(plaintext)
})

test('RailFence rejects rails < 2', () => {
  expect(() => new Cipher.RailFence(1)).toThrow()
})
