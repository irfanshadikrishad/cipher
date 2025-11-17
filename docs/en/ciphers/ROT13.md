#### ROT13 Cipher

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Playfair Cipher instance with a keyword
const playfair = new Cipher.ROT13()

// Encrypt the text
console.log(playfair.encrypt('Hello World!'))
// Example Output: "Uryyb Jbeyq!"

// Decrypt the text
console.log(playfair.decrypt('Uryyb Jbeyq!'))
// Output: "Hello World!"
```

<table
  <tr>
    <td><strong>Input</strong></td>
    <td>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</td>
  </tr>
  <tr>
    <td><strong>Output</strong></td>
    <td>NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm</td>
  </tr>
</table>
