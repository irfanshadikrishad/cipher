#### BEAUFORT CIPHER

The Beaufort cipher is a polyalphabetic substitution cipher closely related to the Vigenère cipher, but with a key difference: it is **reciprocal**, meaning the same operation is used for both encryption and decryption. Each letter is transformed using `(key - plaintext) mod 26`.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const beaufort = new Cipher.Beaufort('secret')
const plaintext = 'hello, beaufort!'

const encrypted = beaufort.encrypt(plaintext)
const decrypted = beaufort.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Encrypt and decrypt are identical operations — `encrypt(encrypt(text))` returns the original text.
- Key must contain only letters (case-insensitive).
- Non-alphabetic characters are preserved unchanged.
