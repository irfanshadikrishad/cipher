#### VIGENERE CIPHER

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Vigenère Cipher instance with a keyword
const vigenere = new Cipher.Vigenere('KEYWORD')

// Encrypt the text
console.log(vigenere.encrypt('hello, vigenere!'))
// Example Output: "riijg, ysmomvuwq!"

// Decrypt the text
console.log(vigenere.decrypt('riijg, ysmomvuwq!'))
// Output: "hello, vigenere!"
```
