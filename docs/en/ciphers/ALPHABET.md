#### THE ALPHABET CIPHER

```ts
import { Cipher } from "@irfanshadikrishad/cipher"

// Create an Alphabet Cipher instance with a keyword
const alphabetCipher = new Cipher.Alphabet("SECRET")

// Encrypt the text
console.log(alphabetCipher.encrypt("hello, alphabet!"))
// Example Output: "zihvw, smowfftc!"

// Decrypt the text
console.log(alphabetCipher.decrypt("zihvw, smowfftc!"))
// Output: "hello, alphabet!"
```
