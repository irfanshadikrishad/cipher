#### AES (Advanced Encryption Standard) CIPHER

The Advanced Encryption Standard, also known by its original name Rijndael, is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology in 2001.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const aes = new Cipher.AES('32bytekey', '16byteinitializebector')
const plaintext = 'hello, aes!'
const encrypt = aes.encrypt(plaintext)
const decrypt = aes.decrypt(encrypt)

console.log(
	`Plaintext:\t${plaintext}\nEncrypted:\t${encrypt}\nDecrypted:\t${decrypt}`
)
```

#### Notes

- This one uses `CBC (Cipher Block Chaining)`, It’s more secure than ECB and ensures each block is dependent on the previous one.
- Using `IV (Identical Vector)`, It prevents identical plaintexts from encrypting to the same ciphertext.
