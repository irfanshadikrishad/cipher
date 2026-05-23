#### COLUMNAR TRANSPOSITION CIPHER

The Columnar Transposition cipher writes the plaintext into a grid row by row, then reads the columns in the order determined by sorting the keyword's letters alphabetically.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const columnar = new Cipher.ColumnarTransposition('zebras')
const plaintext = 'wearediscoveredfleeatonce'

const encrypted = columnar.encrypt(plaintext)
const decrypted = columnar.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Key must contain only letters (case-insensitive).
- If the plaintext length is not a multiple of the key length, the last row is padded with empty cells.
- Longer keywords with more unique letters produce stronger transpositions.
