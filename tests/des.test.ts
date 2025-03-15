import { Cipher } from "../src/index"

test("DES", () => {
  const des = new Cipher.DES("12345678")
  const plaintext = "Hello, World!"
  const encrypt = des.encrypt(plaintext)
  const decrypt = des.decrypt(encrypt)

  expect(decrypt).toBe(plaintext)
})
