#### AUTOKEY CIPHER

The Autokey cipher is a polyalphabetic substitution cipher that improves on Vigenère by eliminating the repeating key weakness. After the initial keyword is exhausted, the plaintext itself extends the key, making the key as long as the message.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const autokey = new Cipher.Autokey('secret')
const plaintext = 'hello, autokey!'

const encrypted = autokey.encrypt(plaintext)
const decrypted = autokey.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Key must contain only letters (case-insensitive).
- Non-alphabetic characters are preserved unchanged and do not consume key positions.
- Unlike Vigenère, the running key never repeats, making frequency analysis harder.
