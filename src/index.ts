import { Cipher } from "./Cipher.js"
import { Caesar } from "./ciphers/Caesar.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"
import { Vigenere } from "./ciphers/Vigenere.js"
import { Alphabet } from "./ciphers/Alphabet.js"

Cipher.Caesar = Caesar
Cipher.Atbash = Atbash
Cipher.Playfair = Playfair
Cipher.Vigenere = Vigenere
Cipher.Alphabet = Alphabet

export { Cipher }
