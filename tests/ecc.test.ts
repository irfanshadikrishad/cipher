import { Cipher } from "../src/index"

test("ECC", async () => {
  const alice = await Cipher.ECC.generate()
  const bob = await Cipher.ECC.generate()

  const bobPub = await bob.exportPublicKey()
  const alicePub = await alice.exportPublicKey()

  alice["recipientPublicKey"] = await Cipher.ECC.importPublicKey(bobPub)
  bob["recipientPublicKey"] = await Cipher.ECC.importPublicKey(alicePub)

  const plaintext = "Hello Bob!"
  const encrypted = await alice.encrypt(plaintext)
  const decrypted = await bob.decrypt(encrypted)

  expect(decrypted).toBe(plaintext)
})
