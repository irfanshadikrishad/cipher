#### BLOWFISH CIPHER

Blowfish is a symmetric block cipher designed by Bruce Schneier in 1993. It uses a 64-bit block size, a 16-round Feistel network, and a variable-length key (1–56 bytes). The subkeys and S-boxes are derived from the hexadecimal digits of Pi.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const blowfish = new Cipher.Blowfish('mysecretkey')
const plaintext = 'hello, blowfish!'

const encrypted = blowfish.encrypt(plaintext)
const decrypted = blowfish.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Key can be a string (UTF-8 encoded) or a `Uint8Array` of 1–56 bytes.
- Encrypted output is a hex-encoded string; pass the hex string to `decrypt()`.
- The plaintext length is stored in the first 4 bytes of the encrypted block so decryption returns the exact original string.
- Blowfish has a slow key setup phase by design, making brute-force attacks harder.
