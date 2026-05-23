import { Cipher } from '../Cipher.js';
export class ColumnarTransposition extends Cipher {
    constructor(key) {
        super();
        if (!key || !/^[a-zA-Z]+$/.test(key)) {
            throw new Error('Key must be a non-empty string containing only letters.');
        }
        this.key = key.toUpperCase();
    }
    sortedOrder() {
        return [...this.key]
            .map((char, i) => ({ char, i }))
            .sort((a, b) => a.char.localeCompare(b.char) || a.i - b.i)
            .map((x) => x.i);
    }
    encrypt(text) {
        const numCols = this.key.length;
        const numRows = Math.ceil(text.length / numCols);
        const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
        for (let i = 0; i < text.length; i++) {
            grid[Math.floor(i / numCols)][i % numCols] = text[i];
        }
        return this.sortedOrder()
            .map((col) => grid.map((row) => row[col]).join(''))
            .join('');
    }
    decrypt(text) {
        const numCols = this.key.length;
        const numRows = Math.ceil(text.length / numCols);
        const extra = text.length % numCols;
        const order = this.sortedOrder();
        const colLengths = order.map((col) => extra === 0 ? numRows : col < extra ? numRows : numRows - 1);
        const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
        let pos = 0;
        for (let k = 0; k < order.length; k++) {
            const col = order[k];
            for (let row = 0; row < colLengths[k]; row++) {
                grid[row][col] = text[pos++];
            }
        }
        return grid.map((row) => row.join('')).join('');
    }
}
