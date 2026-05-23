#### RAIL FENCE CIPHER

The Rail Fence cipher is a transposition cipher that writes the plaintext in a zigzag pattern across a number of "rails" (rows), then reads off each row in order to produce the ciphertext.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const railFence = new Cipher.RailFence(3)
const plaintext = 'hello, rail fence!'

const encrypted = railFence.encrypt(plaintext)
const decrypted = railFence.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- The number of rails must be an integer >= 2.
- All characters (including spaces and punctuation) are preserved and transposed.
- Higher rail counts reduce the transposition effect; at `rails >= text.length` the output equals the input.
