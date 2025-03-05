import { Cipher } from "./Cipher.js"
import { Caesar } from "./ciphers/Ceaser.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"
import { Vigenere } from "./ciphers/Vigenere.js"
Cipher.Caesar = Caesar
Cipher.Atbash = Atbash
Cipher.Playfair = Playfair
Cipher.Vigenere = Vigenere
export { Cipher }
