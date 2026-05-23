#### CHACHA20 CIPHER

ChaCha20 is a modern stream cipher designed by Daniel J. Bernstein as a successor to Salsa20. It is used in TLS 1.3, QUIC, and WireGuard, and is widely regarded as one of the fastest and most secure stream ciphers available.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const key = Cipher.ChaCha20.generateKey() // 256-bit key (base64)
const nonce = Cipher.ChaCha20.generateNonce() // 96-bit nonce (base64)

const chacha = new Cipher.ChaCha20(key, nonce)
const plaintext = 'hello, chacha20!'

const encrypted = chacha.encrypt(plaintext)
const decrypted = chacha.decrypt(encrypted)

console.log(
  `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
)
```

#### Notes

- Key must be exactly 32 bytes (256-bit); use `Cipher.ChaCha20.generateKey()` to generate one.
- Nonce must be exactly 12 bytes (96-bit); use `Cipher.ChaCha20.generateNonce()` to generate one.
- Keys and nonces are base64-encoded strings. Reusing a (key, nonce) pair with different messages breaks security.
- Encrypted output is a base64-encoded string.
- The counter resets to 0 on each `decrypt()` call, matching the initial encrypt state.
