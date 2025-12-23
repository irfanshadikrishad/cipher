#### Nihilist Cipher

Used by Russian Nihilists, Polybius + additive cipher

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Nihilist Cipher instance with a key and keyword
const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')

// Encrypt a message
const plaintext = 'HELLO'
const ciphertext = nihilist.encrypt(plaintext)
console.log(ciphertext) // Output: "64 24 89 87 84"

// Decrypt the ciphertext
const decrypted = nihilist.decrypt(ciphertext)
console.log(decrypted) // Output: "HELLO"
```

#### Nihilist Cipher Features:

- Type: Polybius Square + Additive Cipher
- Key Required: Yes (two keys: alphabet key and keyword)
- Strength: Medium
- History: Used by Russian Nihilists in the 19th century
- Method: Combines a 5×5 Polybius square with numeric addition using a keyword

#### How it works:

- Creates a 5×5 Polybius square using the provided key (I and J combined)
- Converts plaintext to coordinates (row, column) → two-digit numbers
- Converts keyword to numbers and repeats to match plaintext length
- Adds plaintext numbers to keyword numbers
- Output is space-separated numeric ciphertext
