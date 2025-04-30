import { Cipher } from "../src/index"

test(`The Alphabet Cipher`, () => {
  const alphabet = new Cipher.Alphabet("keyword")
  const plaintext = "hello world"
  const enc = alphabet.encrypt(plaintext)
  const dec = alphabet.decrypt(enc)

  expect(dec).toBe(plaintext)
})
