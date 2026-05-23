import { Cipher } from '../src/index'

test('Bifid round-trip', () => {
  const bifid = new Cipher.Bifid('KEYWORD')
  const plaintext = 'HELLOWORLD'
  expect(bifid.decrypt(bifid.encrypt(plaintext))).toBe(plaintext)
})

test('Bifid treats J as I', () => {
  const bifid = new Cipher.Bifid()
  const plaintext = 'FLEEATONCE'
  expect(bifid.decrypt(bifid.encrypt(plaintext))).toBe(plaintext)
})
