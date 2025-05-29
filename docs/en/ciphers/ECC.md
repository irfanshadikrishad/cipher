#### ECC (Elliptic Curve Cryptography) CIPHER

Elliptic Curve Cryptography (ECC) is a modern public-key encryption technique known for its high security and efficiency, even with smaller key sizes. It enables secure message exchange using asymmetric key pairs (private/public), with encryption using ECDH (key agreement) and AES-GCM for message confidentiality.

```ts
import { Cipher } from "@irfanshadikrishad/cipher"

async function main() {
  // Generate ECC key pairs for both parties
  const alice = await Cipher.ECC.generate()
  const bob = await Cipher.ECC.generate()

  // Exchange public keys
  const bobPublic = await bob.exportPublicKey()
  alice["recipientPublicKey"] = await Cipher.ECC.importPublicKey(bobPublic)

  // Alice encrypts a message for Bob
  const plaintext = "hello, ecc!"
  const encrypted = await alice.encrypt(plaintext)

  // Bob decrypts the message using his private key
  const decrypted = await bob.decrypt(encrypted)

  console.log(
    `Plaintext:\t${plaintext}\nEncrypted:\t${encrypted}\nDecrypted:\t${decrypted}`
  )
}

main()
```

#### Notes

- This cipher uses ECDH (Elliptic-curve Diffie–Hellman) to derive a shared secret between sender and recipient.
- Actual message encryption is done with AES-GCM, using the shared secret and a random IV.
- The encrypt() function returns a JSON string containing the IV, ciphertext, and the ephemeral public key.
- No dependencies required – fully native using the Web Crypto API.
- Public keys must be exchanged beforehand to securely encrypt messages between parties.
- Works in modern browsers, Deno, and Node.js v20+ (requires globalThis.crypto).
