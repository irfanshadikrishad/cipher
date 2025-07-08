import { Cipher } from '../src/index'

test('Caesar', () => {
	const caesar = new Cipher.Caesar(3)
	const plaintext = 'hello world'
	const encrypt = caesar.encrypt(plaintext)
	const decrypt = caesar.decrypt(encrypt)

	expect(decrypt).toBe(plaintext)
})
