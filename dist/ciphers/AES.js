import crypto from "crypto"
import { Cipher } from "../Cipher.js"
export class AES extends Cipher {
  constructor(key, iv) {
    super()
    this.key = Buffer.from(key, "hex")
    this.iv = Buffer.from(iv, "hex")
    if (this.key.length !== 32) {
      throw new Error("Invalid key length: AES-256 requires a 32-byte key")
    }
    if (this.iv.length !== 16) {
      throw new Error("Invalid IV length: AES requires a 16-byte IV")
    }
  }
  encrypt(plaintext) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.iv)
    let encrypted = cipher.update(plaintext, "utf8", "hex")
    encrypted += cipher.final("hex")
    return encrypted
  }
  decrypt(ciphertext) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", this.key, this.iv)
    let decrypted = decipher.update(ciphertext, "hex", "utf8")
    decrypted += decipher.final("utf8")
    return decrypted
  }
}
