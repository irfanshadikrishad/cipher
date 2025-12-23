import { Cipher } from '../Cipher.js';
export class Nihilist extends Cipher {
    constructor(key, keyword) {
        super();
        this.key = this.prepareKey(key.toUpperCase().replace(/[^A-Z]/g, ''));
        this.keyword = keyword.toUpperCase().replace(/[^A-Z]/g, '');
    }
    prepareKey(key) {
        const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // I/J combined
        let result = '';
        const seen = new Set();
        // Add key letters first
        for (const char of key) {
            const normalizedChar = char === 'J' ? 'I' : char;
            if (!seen.has(normalizedChar)) {
                result += normalizedChar;
                seen.add(normalizedChar);
            }
        }
        // Add remaining alphabet letters
        for (const char of alphabet) {
            if (!seen.has(char)) {
                result += char;
                seen.add(char);
            }
        }
        return result;
    }
    getCoordinates(text) {
        const normalizedText = text
            .toUpperCase()
            .replace(/J/g, 'I')
            .replace(/[^A-Z]/g, '');
        const coordinates = [];
        for (const char of normalizedText) {
            const index = this.key.indexOf(char);
            if (index !== -1) {
                const row = Math.floor(index / 5) + 1;
                const col = (index % 5) + 1;
                coordinates.push(row, col);
            }
        }
        return coordinates;
    }
    textToNumbers(text) {
        const coordinates = this.getCoordinates(text);
        const numbers = [];
        for (let i = 0; i < coordinates.length; i += 2) {
            numbers.push(coordinates[i] * 10 + coordinates[i + 1]);
        }
        return numbers;
    }
    numbersToText(numbers) {
        let result = '';
        for (const num of numbers) {
            const row = Math.floor(num / 10) - 1;
            const col = (num % 10) - 1;
            if (row >= 0 && row < 5 && col >= 0 && col < 5) {
                const index = row * 5 + col;
                result += this.key.charAt(index);
            }
        }
        return result;
    }
    encrypt(plaintext) {
        if (!plaintext)
            return '';
        // Convert plaintext to numbers
        const plaintextNumbers = this.textToNumbers(plaintext);
        if (plaintextNumbers.length === 0)
            return '';
        // Convert keyword to numbers
        const keywordNumbers = this.textToNumbers(this.keyword);
        if (keywordNumbers.length === 0) {
            return plaintextNumbers.join(' ');
        }
        // Add plaintext and repeated keyword numbers
        const cipherNumbers = [];
        for (let i = 0; i < plaintextNumbers.length; i++) {
            const keywordNum = keywordNumbers[i % keywordNumbers.length];
            cipherNumbers.push(plaintextNumbers[i] + keywordNum);
        }
        return cipherNumbers.join(' ');
    }
    decrypt(ciphertext) {
        if (!ciphertext.trim())
            return '';
        // Parse cipher numbers, handle multiple spaces
        const cipherNumbers = ciphertext
            .trim()
            .split(/\s+/)
            .map(Number)
            .filter((n) => !isNaN(n));
        if (cipherNumbers.length === 0)
            return '';
        // Convert keyword to numbers
        const keywordNumbers = this.textToNumbers(this.keyword);
        if (keywordNumbers.length === 0) {
            return this.numbersToText(cipherNumbers);
        }
        // Subtract keyword numbers from cipher numbers
        const plaintextNumbers = [];
        for (let i = 0; i < cipherNumbers.length; i++) {
            const keywordNum = keywordNumbers[i % keywordNumbers.length];
            plaintextNumbers.push(cipherNumbers[i] - keywordNum);
        }
        return this.numbersToText(plaintextNumbers);
    }
}
