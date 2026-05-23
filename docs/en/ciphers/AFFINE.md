#### AFFINE CIPHER

The Affine cipher is a substitution cipher where each letter is encrypted using the formula `E(x) = (a·x + b) mod 26`. It generalizes the Caesar cipher (a=1) and Atbash cipher (a=25, b=25). Decryption requires the modular inverse of `a`.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const affine = new Cipher.Affine(5, 8)
const plaintext = 'hello, affine!'

const encrypted = affine.encrypt(plaintext)
const decrypted = affine.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- The key `a` must be coprime with 26. Valid values: `1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25`.
- The key `b` can be any integer (reduced mod 26 internally).
- Non-alphabetic characters (spaces, punctuation) are preserved unchanged.
- Case is preserved — uppercase letters encrypt to uppercase, lowercase to lowercase.
