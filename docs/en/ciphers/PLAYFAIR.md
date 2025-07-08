#### PLAYFAIR CIPHER

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Playfair Cipher instance with a keyword
const playfair = new Cipher.Playfair('rxyz')

// Encrypt the text
console.log(playfair.encrypt('hello caesar'))
// Example Output: "ibmmq dkfnbq"

// Decrypt the text
console.log(playfair.decrypt('ibmmq dkfnbq'))
// Output: "hello caesar"
```
