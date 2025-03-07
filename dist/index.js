import { Cipher } from "./Cipher"
import { Caesar } from "./ciphers/Caesar"
import { Atbash } from "./ciphers/Atbash"
import { Playfair } from "./ciphers/Playfair"
import { Vigenere } from "./ciphers/Vigenere"
Cipher.Caesar = Caesar
Cipher.Atbash = Atbash
Cipher.Playfair = Playfair
Cipher.Vigenere = Vigenere
export { Cipher }
