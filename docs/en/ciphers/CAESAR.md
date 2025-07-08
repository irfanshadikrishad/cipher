#### CAESAR CIPHER

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Caesar Cipher instance with a shift of 6
const caesar = new Cipher.Caesar(6)

// Encrypt the text
console.log(caesar.encrypt('hello, caesar!'))
// Output: "nkrru, igkygx!"

// Decrypt the text
console.log(caesar.decrypt('nkrru, igkygx!'))
// Output: "hello, caesar!"
```
