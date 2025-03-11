import { Cipher } from "../src/index"

test("ADFGVX", () => {
  const adfgvx = new Cipher.ADFGVX(
    "CAPTAIN",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  )
  const plaintext = "helloworld"
  const encrypted = adfgvx.encrypt(plaintext)
  const decrypted = adfgvx.decrypt(encrypted)

  console.log(encrypted, decrypted)

  expect(decrypted).toBe(plaintext)
})
