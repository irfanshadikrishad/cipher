#### @irfanshadikrishad/cipher

A versatile and secure cryptographic library for implementing various cipher algorithms in Node.js applications with zero/0 dependencies.

![NPM Version](https://img.shields.io/npm/v/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=141b23&color=%2385c1dc)
![NPM Downloads](https://img.shields.io/npm/dw/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=141b23&color=%2385c1dc)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=141b23&color=%2385c1dc)

#### 🚀 Installation

Install the package via npm:

```bash
npm install @irfanshadikrishad/cipher
```

yarn:

```bash
yarn add @irfanshadikrishad/cipher
```

bun:

```bash
bun add @irfanshadikrishad/cipher
```

#### Usage

Import the library and use a cipher algorithm:

```ts
import { Cipher } from '@irfanshadikrishad/cipher'

// Create a Caesar Cipher instance with a shift of 6
const caesar = new Cipher.Caesar(6)

console.log(caesar.encrypt('hello world')) // Output: "nkrru cuxrj"
```

#### Supported Ciphers

This library provides implementations of various classical and modern ciphers:

| Cipher                                                 | Type                                     | Key required? | Strength  | Used In/Notes                                         |
| ------------------------------------------------------ | ---------------------------------------- | ------------- | --------- | ----------------------------------------------------- |
| [Caesar Cipher](/docs/en/ciphers/CAESAR.md)            | Substitution                             | No            | Low       | Ancient Rome, Simple Obsfuscation                     |
| [Atbash Cipher](/docs/en/ciphers/ATBASH.md)            | Substitution                             | No            | Low       | Hebrew Cipher, Basic Encryption                       |
| [ROT13](/docs/en/ciphers/ROT13.md)                     | Substitution (Caesar variant)            | No            | Very Low  | Simple text obfuscation, not secure                   |
| [Affine Cipher](/docs/en/ciphers/AFFINE.md)            | Substitution                             | Yes           | Low       | Generalizes Caesar, teaches modular arithmetic        |
| [Playfair Cipher](/docs/en/ciphers/PLAYFAIR.md)        | Diagraph-based                           | Yes           | Medium    | Used in WWI & WWII                                    |
| [Vigenère Cipher](/docs/en/ciphers/VIGENERE.md)        | Polyalphabetic                           | Yes           | Medium    | Used in Historical Documents                          |
| [The Alphabet Cipher](/docs/en/ciphers/ALPHABET.md)    | Polyalphabetic                           | Yes           | Medium    | Inspired by Vigenere, Cryptography Puzzles            |
| [Beaufort Cipher](/docs/en/ciphers/BEAUFORT.md)        | Polyalphabetic (Reciprocal)              | Yes           | Medium    | Vigenere variant where encrypt = decrypt              |
| [Autokey Cipher](/docs/en/ciphers/AUTOKEY.md)          | Polyalphabetic                           | Yes           | Medium    | Plaintext extends the key, fixes Vigenere weakness    |
| [Rail Fence Cipher](/docs/en/ciphers/RAILFENCE.md)     | Transposition                            | Yes           | Low       | Zigzag pattern across N rails                         |
| [Columnar Transposition](/docs/en/ciphers/COLUMNAR.md) | Transposition                            | Yes           | Medium    | Keyword-sorted column reading                         |
| [ADFGVX](/docs/en/ciphers/ADFGVX.md)                   | Polybius Square + Columnar Transposition | Yes           | Medium    | Used in WWI, Known for 6x6 polybius square            |
| [Nihilist](/docs/en/ciphers/Nihilist.md)               | Polybius Square + Addition               | Yes           | Medium    | Used by Russian Nihilists, Polybius + additive cipher |
| [Bifid Cipher](/docs/en/ciphers/BIFID.md)              | Polybius Square + Fractionation          | Yes           | Medium    | Combines coordinates and fractionation                |
| [RC4](/docs/en/ciphers/RC4.md)                         | Stream Cipher                            | Yes           | Low       | Historically widespread, now considered broken        |
| [Salsa20](/docs/en/ciphers/SALSA20.md)                 | Stream Cipher                            | Yes           | High      | Modern Cryptography, Secure Communications            |
| [ChaCha20](/docs/en/ciphers/CHACHA20.md)               | Stream Cipher                            | Yes           | High      | Successor to Salsa20, used in TLS 1.3 and WireGuard   |
| [Blowfish](/docs/en/ciphers/BLOWFISH.md)               | Symmetric Block Cipher                   | Yes           | Medium    | Feistel network, variable key length (1–56 bytes)     |
| [DES](/docs/en/ciphers/DES.md)                         | Symmetric Block Cipher                   | Yes           | Medium    | 56-bit key, Used in legacy systems, replaced by AES   |
| [AES](/docs/en/ciphers/AES.md)                         | Symmetric Block Cipher                   | Yes           | High      | Also known as Rijndael (CBC mode)                     |
| [AES-GCM](/docs/en/ciphers/AESGCM.md)                  | Symmetric Block Cipher (AEAD)            | Yes           | Very High | Authenticated encryption, modern best practice        |
| [ECC](/docs/en/ciphers/ECC.md)                         | Asymmetric (Public-Key Cryptography)     | Yes           | Very High | Used in modern systems like Bitcoin, TLS, JWT, etc.   |
| [RSA](/docs/en/ciphers/RSA.md)                         | Asymmetric (Public-Key Cryptography)     | Yes           | Very High | Factoring-based, canonical public-key cipher          |

#### Contribution

To contribute on the codebase, follow [contribution guideline](/docs/en/CONTRIBUTING.md).

#### Support

If you find this library useful, consider giving it a ⭐ on GitHub!

Thanks for visiting! (>'-'<)
