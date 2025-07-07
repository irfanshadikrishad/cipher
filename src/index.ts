import { Cipher } from './Cipher.js'
import { ADFGVX } from './ciphers/ADFGVX.js'
import { AES } from './ciphers/AES.js'
import { Alphabet } from './ciphers/Alphabet.js'
import { Atbash } from './ciphers/Atbash.js'
import { Caesar } from './ciphers/Caesar.js'
import { DES } from './ciphers/DES.js'
import { ECC } from './ciphers/ECC.js'
import { Playfair } from './ciphers/Playfair.js'
import { Salsa20 } from './ciphers/Salsa20.js'
import { Vigenere } from './ciphers/Vigenere.js'

Cipher.Caesar = Caesar
Cipher.Atbash = Atbash
Cipher.Playfair = Playfair
Cipher.Vigenere = Vigenere
Cipher.Alphabet = Alphabet
Cipher.Salsa20 = Salsa20
Cipher.ADFGVX = ADFGVX
Cipher.AES = AES
Cipher.DES = DES
Cipher.ECC = ECC

export { Cipher }
