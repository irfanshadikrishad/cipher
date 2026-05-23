#### BIFID CIPHER

The Bifid cipher combines a Polybius square with fractionation. Each letter's row and column coordinates are separated, recombined in a different order, then re-encoded — making it harder to break than simple substitution ciphers.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const bifid = new Cipher.Bifid('KEYWORD')
const plaintext = 'HELLOWORLD'

const encrypted = bifid.encrypt(plaintext)
const decrypted = bifid.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Only alphabetic characters are processed; non-letters are stripped from the output.
- `J` is treated as `I` (standard 5x5 Polybius square convention).
- An optional keyword shuffles the Polybius square — without one, the standard `ABCDE...` order is used.
- Input is converted to uppercase automatically.
