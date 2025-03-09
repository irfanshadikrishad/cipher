import { Cipher } from "../src/index"
import crypto from "crypto"

test(`Salsa20`, () => {
  const key = crypto.getRandomValues(new Uint8Array(32))
  const nonce = crypto.getRandomValues(new Uint8Array(8))
  const salsa = new Cipher.Salsa20(key, nonce)

  const plaintext = "Hello, Salsa20!"
  const ciphertext = salsa.encrypt(plaintext)

  const decrypted = salsa.decrypt(ciphertext)

  expect(decrypted).toBe(plaintext)
})
