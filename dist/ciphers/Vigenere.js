import { Cipher } from "../Cipher"
export class Vigenere extends Cipher {
  constructor(key) {
    super()
    if (!key || !/^[a-zA-Z]+$/.test(key)) {
      throw new Error("Key must be a non-empty string containing only letters.")
    }
    this.key = key.toUpperCase()
  }
  repeatKey(text) {
    let repeatedKey = ""
    for (let i = 0, j = 0; i < text.length; i++) {
      const char = text[i]
      if (/[a-zA-Z]/.test(char)) {
        repeatedKey += this.key[j % this.key.length]
        j++
      } else {
        repeatedKey += char
      }
    }
    return repeatedKey
  }
  encrypt(text) {
    const key = this.repeatKey(text)
    return text
      .split("")
      .map((char, i) => {
        if (char >= "A" && char <= "Z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) -
              65 +
              (key[i].toUpperCase().charCodeAt(0) - 65)) %
              26) +
              65
          )
        } else if (char >= "a" && char <= "z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) -
              97 +
              (key[i].toLowerCase().charCodeAt(0) - 97)) %
              26) +
              97
          )
        }
        return char
      })
      .join("")
  }
  decrypt(text) {
    const key = this.repeatKey(text)
    return text
      .split("")
      .map((char, i) => {
        if (char >= "A" && char <= "Z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) -
              65 -
              (key[i].toUpperCase().charCodeAt(0) - 65) +
              26) %
              26) +
              65
          )
        } else if (char >= "a" && char <= "z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) -
              97 -
              (key[i].toLowerCase().charCodeAt(0) - 97) +
              26) %
              26) +
              97
          )
        }
        return char
      })
      .join("")
  }
}
