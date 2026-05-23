#### RC4 CIPHER

RC4 (Rivest Cipher 4) is a symmetric stream cipher that uses a key-scheduling algorithm (KSA) and a pseudo-random generation algorithm (PRGA) to produce a keystream, which is XORed with the plaintext. Ciphertext is returned as a hex string.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const rc4 = new Cipher.RC4('secretkey')
const plaintext = 'hello, rc4!'

const encrypted = rc4.encrypt(plaintext)
const decrypted = rc4.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- RC4 is considered cryptographically broken and should not be used for security-critical applications.
- Included for educational purposes and legacy compatibility.
- Accepts any non-empty string as a key.
- Encrypted output is a hex-encoded string; pass the hex string to `decrypt()`.
