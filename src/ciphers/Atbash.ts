import { Cipher } from "../Cipher"

export class Atbash extends Cipher {
  encrypt(text: string): string {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(90 - (code - 65))
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(122 - (code - 97))
        }
        return char
      })
      .join("")
  }

  decrypt(text: string): string {
    // Since Atbash is a reciprocal cipher, encryption and decryption are identical.
    return this.encrypt(text)
  }
}
