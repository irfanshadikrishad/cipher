import { Cipher } from "./Cipher.js"
import { Caesar } from "./ciphers/Caesar.js"
import { Atbash } from "./ciphers/Atbash.js"
import { Playfair } from "./ciphers/Playfair.js"
import { Vigenere } from "./ciphers/Vigenere.js"
import { Alphabet } from "./ciphers/Alphabet.js"
import { Salsa20 } from "./ciphers/Salsa20.js"
import { ADFGVX } from "./ciphers/ADFGVX.js"
Cipher.Caesar = Caesar
Cipher.Atbash = Atbash
Cipher.Playfair = Playfair
Cipher.Vigenere = Vigenere
Cipher.Alphabet = Alphabet
Cipher.Salsa20 = Salsa20
Cipher.ADFGVX = ADFGVX
export { Cipher }
