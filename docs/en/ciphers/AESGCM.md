#### AES-GCM CIPHER

AES-GCM (Galois/Counter Mode) is an authenticated encryption with associated data (AEAD) mode of AES. It provides both confidentiality and integrity verification in a single operation, making it the modern best practice for symmetric encryption.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

async function main() {
  const key = Cipher.AESGCM.generateKey() // 256-bit key (hex)
  const nonce = Cipher.AESGCM.generateNonce() // 96-bit nonce (hex)

  const aesgcm = new Cipher.AESGCM(key, nonce)
  const plaintext = 'hello, aes-gcm!'

  const encrypted = await aesgcm.encrypt(plaintext)
  const decrypted = await aesgcm.decrypt(encrypted)

  console.log(
    `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
  )
}

main()
```

#### Notes

- Key must be exactly 32 bytes (256-bit); use `Cipher.AESGCM.generateKey()` to generate one.
- Nonce must be exactly 12 bytes (96-bit); use `Cipher.AESGCM.generateNonce()` to generate one.
- Keys and nonces are hex-encoded strings. **Never reuse a (key, nonce) pair** — doing so breaks both confidentiality and integrity.
- `encrypt()` and `decrypt()` are async and return Promises.
- Encrypted output is a hex-encoded string containing the ciphertext and authentication tag.
- Uses the Web Crypto API (`node:crypto` webcrypto) — no external dependencies.
