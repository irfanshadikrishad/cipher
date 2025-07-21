#### DES (Data Encryption Standard) Cipher

The Data Encryption Standard (DES /ˌdiːˌiːˈɛs, dɛz/) is a symmetric-key algorithm for the encryption of digital data.

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

const des = new Cipher.DES(
  crypto.getRandomValues(new Uint8Array(8)),
  crypto.getRandomValues(new Uint8Array(8))
)

const plaintext = 'You see but you do not observe.'
const enc = des.encrypt(plaintext)
const dec = des.decrypt(enc)

console.log(`Plaintext:\t${plaintext}\nEncrypted:\t${enc}\nDecrypted:\t${dec}`)
```

```markdown
Plaintext: You see but you do not observe.
Encrypted: 497f707063657535676071706c6a6535607f253b7b74307f6767602366653b04
Decrypted: You see but you do not observe.
```

#### Facts and Notes about DES

- Basic Information
  - **Full Name**: Data Encryption Standard
  - **Designers**: IBM
  - **First Published**: 1975 (Federal Register), standardized in January 1977
  - **Derived from**: Lucifer
  - **Successors**: Triple DES, G-DES, DES-X, LOKI89, ICE
  - **Key Size**: 56 bits (effective key length)
  - **Block Size**: 64 bits
  - **Structure**: Balanced Feistel network
  - **Rounds**: 16

- Development and Standardization
  - Developed in the early 1970s at IBM and based on an earlier design by Horst Feistel.
  - Submitted to the National Bureau of Standards (NBS) in response to an invitation to propose a candidate for protecting sensitive, unclassified electronic government data.
  - In 1976, after consultation with the National Security Agency (NSA), a slightly modified version was published as an official Federal Information Processing Standard (FIPS) for the United States.
  - DES was approved as a federal standard in November 1976 and published on January 15, 1977, as FIPS PUB 46.

- Controversies and Security Concerns
  - **Key Length**: The relatively short key length of 56 bits made DES vulnerable to brute-force attacks.
  - **NSA Involvement**: The involvement of the NSA in the design process raised suspicions about a potential backdoor. However, it was later found that while the NSA helped strengthen the algorithm against differential cryptanalysis, they also ensured the key size was reduced.
  - **Weak Keys**: DES has four weak keys and six pairs of semi-weak keys, but these can be easily avoided in implementation.

- Cryptanalysis and Attacks
  - **Brute-Force Attacks**: In January 1999, distributed.net and the Electronic Frontier Foundation (EFF) collaborated to publicly break a DES key in 22 hours and 15 minutes.
  - **Differential Cryptanalysis**: Rediscovered in the late 1980s by Eli Biham and Adi Shamir, this attack requires 2^47 chosen plaintexts.
  - **Linear Cryptanalysis**: Discovered by Mitsuru Matsui, this attack requires 2^43 known plaintexts.
  - **Other Attacks**: There are also other theoretical attacks like Davies' attack and differential-linear cryptanalysis.

- Modern Status
  - DES has been withdrawn as a standard by the National Institute of Standards and Technology (NIST) and superseded by the Advanced Encryption Standard (AES).
  - Triple DES is still considered secure and is approved for use through the year 2030 for sensitive government information.

- Influence
  - DES played a crucial role in the development of modern cryptography and served as a catalyst for the academic study of encryption algorithms.
