#### RSA CIPHER

RSA (Rivest–Shamir–Adleman) is the canonical asymmetric public-key cipher, based on the mathematical difficulty of factoring large integers. Messages are encrypted with the recipient's public key and can only be decrypted with the corresponding private key.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

async function main() {
  // Generate a 2048-bit RSA key pair
  const rsa = await Cipher.RSA.generate(2048)
  const plaintext = 'hello, rsa!'

  const encrypted = await rsa.encrypt(plaintext)
  const decrypted = await rsa.decrypt(encrypted)

  console.log(
    `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
  )
}

main()
```

You can also export and share the public key so others can encrypt messages for you:

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

async function main() {
  const bob = await Cipher.RSA.generate(2048)
  const bobPublicHex = await bob.exportPublicKey()

  // Alice imports Bob's public key and encrypts a message
  const alice = await Cipher.RSA.importPublicKey(bobPublicHex)
  const encrypted = await alice.encrypt('hello, bob!')

  // Bob decrypts with his private key
  const decrypted = await bob.decrypt(encrypted)
  console.log(decrypted) // "hello, bob!"
}

main()
```

#### Notes

- `Cipher.RSA.generate(modulusLength)` accepts `2048` or `4096`. Defaults to `2048`.
- `encrypt()` and `decrypt()` are async and return Promises.
- Encrypted output is a hex-encoded string.
- Uses RSA-OAEP with SHA-256 padding — secure against chosen-ciphertext attacks.
- RSA can only encrypt short messages (limited by key size minus padding). For large data, use RSA to encrypt a symmetric key, then encrypt the data with AES-GCM.
- Uses the Web Crypto API (`node:crypto` webcrypto) — no external dependencies.
