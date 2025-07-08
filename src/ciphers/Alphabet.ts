import { Cipher } from '../Cipher.js'

export class Alphabet extends Cipher {
	private keyword: string
	private static alphabet = 'abcdefghijklmnopqrstuvwxyz'

	constructor(keyword: string) {
		super()
		this.keyword = keyword.toLowerCase()
	}

	/**
	 * Encrypts a message using the Alphabet Cipher.
	 * @param message - The plaintext message to encrypt.
	 * @returns The encrypted ciphertext.
	 */
	encrypt(message: string): string {
		message = message.toLowerCase()
		const table = Alphabet.getVigenereTable()
		let result = ''

		for (let i = 0; i < message.length; i++) {
			const msgChar = message[i]
			const keyChar = this.keyword[i % this.keyword.length]

			if (!Alphabet.alphabet.includes(msgChar)) {
				result += msgChar // Preserve non-alphabet characters
				continue
			}

			const row = Alphabet.alphabet.indexOf(keyChar)
			const col = Alphabet.alphabet.indexOf(msgChar)
			result += table[row][col]
		}

		return result
	}

	/**
	 * Decrypts a message using the Alphabet Cipher.
	 * @param ciphertext - The encrypted message to decrypt.
	 * @returns The original plaintext message.
	 */
	decrypt(ciphertext: string): string {
		ciphertext = ciphertext.toLowerCase()
		const table = Alphabet.getVigenereTable()
		let result = ''

		for (let i = 0; i < ciphertext.length; i++) {
			const cipherChar = ciphertext[i]
			const keyChar = this.keyword[i % this.keyword.length]

			if (!Alphabet.alphabet.includes(cipherChar)) {
				result += cipherChar // Preserve non-alphabet characters
				continue
			}

			const row = Alphabet.alphabet.indexOf(keyChar)
			const col = table[row].indexOf(cipherChar)
			result += Alphabet.alphabet[col]
		}

		return result
	}

	/**
	 * Generates the Vigenère table for encoding and decoding.
	 */
	private static getVigenereTable(): string[][] {
		const table: string[][] = []
		for (let i = 0; i < 26; i++) {
			table[i] = Alphabet.alphabet
				.slice(i)
				.split('')
				.concat(Alphabet.alphabet.slice(0, i).split(''))
		}
		return table
	}
}
