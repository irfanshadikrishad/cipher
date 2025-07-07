#### ADFGVX CIPHER

ADFGVX is a German encryption system dating from the First World War (WWI) using a grid and the letters A,D,F,G,V,X before subjecting the ciphertext to column transposition.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const adfgvx = new Cipher.ADFGVX('MIMX', 'HIMOMILOVEYOU')

const plaintext = 'youseebutyoudonotobserve'
const encrypt = adfgvx.encrypt(plaintext)
const decrypt = adfgvx.decrypt(enc)

console.log(
	`Plaintext:\t${plaintext}\nEncrypted:\t${encrypt}\nDecrypted:\t${decrypt}`
)
```

#### Limitation

- `plaintext` or `message` must be alphabet no symbol, space or special characters.

#### References

- [ADFGVX Cipher: Encryption and Decryption (Updated)](https://www.youtube.com/watch?v=T0xfKiU9Rr4) by [Proof of Concept](https://www.youtube.com/@ProofofConceptMath)
- [ADFGVX cipher](https://en.wikipedia.org/wiki/ADFGVX_cipher) on wikipedia
