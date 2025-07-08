#### ATBASH CIPHER

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create an Atbash Cipher instance
const atbash = new Cipher.Atbash()

// Encrypt the text
console.log(atbash.encrypt('hello, Atbash!'))
// Output: "svool, Zgyzhs!"

// Decrypt the text
console.log(atbash.decrypt('svool, Zgyzhs!'))
// Output: "hello, Atbash!"
```
