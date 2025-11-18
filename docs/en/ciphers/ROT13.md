#### ROT13 Cipher

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a rot13 cipher instance
const rot13 = new Cipher.ROT13()

// Encrypt the text
console.log(rot13.encrypt('Hello World!'))
// Example Output: "Uryyb Jbeyq!"

// Decrypt the text
console.log(rot13.decrypt('Uryyb Jbeyq!'))
// Output: "Hello World!"
```

#### Substitution Swap Table

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
