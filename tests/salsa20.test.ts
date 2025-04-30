import { Cipher } from "../src/index"

test(`Salsa20`, () => {
  const key = Cipher.Salsa20.generateKey()
  const nonce = Cipher.Salsa20.generateNonce()

  const salsa = new Cipher.Salsa20(key, nonce)

  const plaintext = "Hello, Salsa20!"
  const ciphertext = salsa.encrypt(plaintext)

  const decrypted = salsa.decrypt(ciphertext)

  expect(decrypted).toBe(plaintext)
})
