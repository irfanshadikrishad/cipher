import { Cipher } from "../src/index"

test("ADFGVX", () => {
  const adfgvx = new Cipher.ADFGVX(null, "CIPHER")
  const plaintext = "youseebutyoudonotobserve"
  const encrypted = adfgvx.encrypt(plaintext)
  const decrypted = adfgvx.decrypt(encrypted)

  expect(decrypted).toBe(plaintext.replace(/[^A-Za-z0-9]/g, "").toUpperCase())
})
