#### SALSA20 CIPHER

```ts
import { Cipher } from "@irfanshadikrishad/cipher"

// Generate a secure 256-bit (32-byte) key in base64
const key = Cipher.Salsa20.generateKey()

// Generate a secure 64-bit (8-byte) nonce in base64
const nonce = Cipher.Salsa20.generateNonce()

// Create a Salsa20 instance with the key and nonce
const salsa20 = new Cipher.Salsa20(key, nonce)

// Encrypt the text
const encrypted = salsa20.encrypt("hello, salsa20!")
console.log("Encrypted:", encrypted)
// Output should be Base64-encoded ciphertext

// Decrypt the text
const decrypted = salsa20.decrypt(encrypted)
console.log("Decrypted:", decrypted)
// Output should be: "hello, salsa20!"
```
