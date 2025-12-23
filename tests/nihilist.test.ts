import { Cipher } from '../src/index'

describe('Nihilist Cipher', () => {
  test('should encrypt and decrypt basic text', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'HELLOWORLD'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(plaintext)
  })

  test('should handle case insensitivity', () => {
    const nihilist = new Cipher.Nihilist('zebras', 'keyword')
    const plaintext = 'Hello World'
    const expectedPlaintext = 'HELLOWORLD'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(expectedPlaintext)
  })

  test('should handle I/J equivalence', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'JUSTICE'
    const expectedPlaintext = 'IUSTICE'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(expectedPlaintext)
  })

  test('should handle spaces and special characters', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'Hello, World! 123'
    const expectedPlaintext = 'HELLOWORLD'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(expectedPlaintext)
  })

  test('should work with different keys and keywords', () => {
    const nihilist = new Cipher.Nihilist('CRYPTOGRAPHY', 'SECRET')
    const plaintext = 'MESSAGE'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(plaintext)
  })

  test('should produce consistent encryption', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'TEST'

    const ciphertext1 = nihilist.encrypt(plaintext)
    const ciphertext2 = nihilist.encrypt(plaintext)

    expect(ciphertext1).toBe(ciphertext2)
  })

  test('should handle empty string', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')

    const ciphertext = nihilist.encrypt('')
    const decrypted = nihilist.decrypt('')

    expect(ciphertext).toBe('')
    expect(decrypted).toBe('')
  })

  test('should handle short keyword', () => {
    const nihilist = new Cipher.Nihilist('ABCDEFGHIKLMNOPQRSTUVWXYZ', 'KEY')
    const plaintext = 'LONGMESSAGE'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(plaintext)
  })

  test('should handle numeric ciphertext input', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'HELLO'

    const ciphertext = nihilist.encrypt(plaintext)

    expect(ciphertext).toMatch(/^(\d+\s)*\d+$/)

    const decrypted = nihilist.decrypt(ciphertext)
    expect(decrypted).toBe(plaintext)
  })

  test('comprehensive test with verified values', () => {
    // Using ZEBRAS as key, KEYWORD as keyword
    // Polybius square:
    // 1: Z E B R A
    // 2: S C D F G
    // 3: H I K L M
    // 4: N O P Q T
    // 5: U V W X Y

    // Letters -> coordinates (row, column):
    // H -> (3,1) -> 31
    // E -> (1,2) -> 12
    // L -> (3,4) -> 34
    // L -> (3,4) -> 34
    // O -> (4,2) -> 42

    // Keyword "KEYWORD" -> coordinates:
    // K -> (3,3) -> 33
    // E -> (1,2) -> 12
    // Y -> (5,5) -> 55
    // W -> (5,3) -> 53
    // O -> (4,2) -> 42
    // R -> (1,4) -> 14
    // D -> (2,3) -> 23

    // Repeating KEYWORD for "HELLO":
    // H(31) + K(33) = 64
    // E(12) + E(12) = 24
    // L(34) + Y(55) = 89
    // L(34) + W(53) = 87
    // O(42) + O(42) = 84

    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const plaintext = 'HELLO'
    const expectedCiphertext = '64 24 89 87 84'

    const ciphertext = nihilist.encrypt(plaintext)
    expect(ciphertext).toBe(expectedCiphertext)

    const decrypted = nihilist.decrypt(ciphertext)
    expect(decrypted).toBe(plaintext)
  })

  test('simple verification test - fixed expectations', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')

    // Test single letter 'H'
    // H(31) + K(33) = 64
    const hCipher = nihilist.encrypt('H')
    expect(hCipher).toBe('64')

    // Test single letter 'E'
    // E(12) + K(33) = 45 (keyword starts with 'K', not 'E'!)
    const eCipher = nihilist.encrypt('E')
    expect(eCipher).toBe('45')

    // Test two letters 'HE'
    // H(31) + K(33) = 64
    // E(12) + E(12) = 24
    const heCipher = nihilist.encrypt('HE')
    expect(heCipher).toBe('64 24')

    // Test decryption
    expect(nihilist.decrypt('64')).toBe('H')
    expect(nihilist.decrypt('45')).toBe('E')
    expect(nihilist.decrypt('64 24')).toBe('HE')
  })

  test('should encrypt and decrypt longer messages', () => {
    const nihilist = new Cipher.Nihilist('PLAYFAIR', 'CODEX')
    const plaintext = 'ATTACKATDAWN'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(plaintext)
  })

  test('should handle keyword with repeated letters', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'MISSISSIPPI')
    const plaintext = 'TEST'

    const ciphertext = nihilist.encrypt(plaintext)
    const decrypted = nihilist.decrypt(ciphertext)

    expect(decrypted).toBe(plaintext)
  })

  test('should handle edge case with numbers in ciphertext', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')

    // Test with extra spaces
    const decrypted1 = nihilist.decrypt('64  24  89  87  84')
    expect(decrypted1).toBe('HELLO')

    // Test with leading/trailing spaces
    const decrypted2 = nihilist.decrypt(' 64 24 89 87 84 ')
    expect(decrypted2).toBe('HELLO')
  })

  test('verify full encryption-decryption cycle', () => {
    const nihilist = new Cipher.Nihilist('ZEBRAS', 'KEYWORD')
    const testCases = [
      'HELLO',
      'WORLD',
      'CRYPTOGRAPHY',
      'TESTING',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ]

    for (const plaintext of testCases) {
      const ciphertext = nihilist.encrypt(plaintext)
      const decrypted = nihilist.decrypt(ciphertext)
      expect(decrypted).toBe(plaintext.replace(/J/g, 'I'))
    }
  })

  test('test with different keys', () => {
    const testCases = [
      { key: 'PLAYFAIR', keyword: 'EXAMPLE', plaintext: 'HELLO' },
      { key: 'MONARCHY', keyword: 'SECRET', plaintext: 'MESSAGE' },
      { key: 'KRYPTOS', keyword: 'KEY', plaintext: 'LONGERMESSAGE' },
    ]

    for (const { key, keyword, plaintext } of testCases) {
      const nihilist = new Cipher.Nihilist(key, keyword)
      const ciphertext = nihilist.encrypt(plaintext)
      const decrypted = nihilist.decrypt(ciphertext)
      expect(decrypted).toBe(plaintext.replace(/J/g, 'I'))
    }
  })
})
