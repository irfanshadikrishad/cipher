import crypto from "crypto"
import { Cipher } from "../src/index"

test("AES", () => {
  const key = crypto.randomBytes(32).toString("hex")
  const iv = crypto.randomBytes(16).toString("hex")
  const aes = new Cipher.AES(key, iv)

  const plaintext = "Hello, World!"
  const ciphertext = aes.encrypt(plaintext)
  const decrypted = aes.decrypt(ciphertext)

  expect(decrypted).toBe(plaintext)
})
