#### @irfanshadikrishad/cipher

A versatile and secure cryptographic library for implementing various cipher algorithms in Node.js applications.

![NPM Version](https://img.shields.io/npm/v/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=202020&color=81B29A)
![NPM Downloads](https://img.shields.io/npm/dw/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=202020&color=BE9A60)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40irfanshadikrishad%2Fcipher?style=for-the-badge&labelColor=202020&color=655699)

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

#### 📖 Usage

Import the library and use a cipher algorithm:

```ts
import { Cipher } from "@irfanshadikrishad/cipher"

// Create a Caesar Cipher instance with a shift of 6
const caesar = new Cipher.Caesar(6)

console.log(caesar.encrypt("hello world")) // Output: "nkrru cuxrj"
```

#### 🔐 Supported Ciphers

This library provides implementations of various classical and modern ciphers:

| Cipher                                              | Type                                     | Key required? | Strength | Used In/Notes                              |
| --------------------------------------------------- | ---------------------------------------- | ------------- | -------- | ------------------------------------------ |
| [Caesar Cipher](/docs/en/ciphers/CAESAR.md)         | Substitution                             | No            | Low      | Ancient Rome, Simple Obsfuscation          |
| [Atbash Cipher](/docs/en/ciphers/ATBASH.md)         | Substitution                             | No            | Low      | Hebrew Cipher, Basic Encryption            |
| [Playfair Cipher](/docs/en/ciphers/PLAYFAIR.md)     | Diagraph-based                           | Yes           | Medium   | Used in WWI & WWII                         |
| [Vigenère Cipher](/docs/en/ciphers/VIGENERE.md)     | Polyalphabetic                           | Yes           | Medium   | Used in Historical Documents               |
| [The Alphabet Cipher](/docs/en/ciphers/ALPHABET.md) | Polyalphabetic                           | Yes           | Medium   | Inspired by Vigenere, Cryptography Puzzles |
| [Salsa20](/docs/en/ciphers/SALSA20.md)              | Stream Cipher                            | Yes           | High     | Modern Cryptography, Secure Communications |
| [ADFGVX](/docs/en/ciphers/ADFGVX.md)                | Polybius Square + Columnar Transposition | Yes           | Medium   | Used in WWI, Known for 6x6 polybius square |
| [AES](/docs/en/ciphers/AES.md)                      | Symmetric Block Cipher                   | Yes           | High     | Also known as, Rijndael                    |

More ciphers coming soon...

#### 🍀 Contribution

To contribute on the codebase, follow [contribution guideline](/docs/en/CONTRIBUTING.md).

#### ❤️ Support

If you find this library useful, consider giving it a ⭐ on GitHub!

Thanks for visiting! (>'-'<)
