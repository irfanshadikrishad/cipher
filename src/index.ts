import { Cipher } from "./Cipher.js"
import { Caesar } from "./ciphers/Ceaser.js"
import { Atbash } from "./ciphers/Atbash.js"

Cipher.Caesar = Caesar
Cipher.Atbash = Atbash

export { Cipher }
