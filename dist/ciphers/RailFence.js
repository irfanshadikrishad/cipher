import { Cipher } from '../Cipher.js';
export class RailFence extends Cipher {
    constructor(rails) {
        super();
        if (!Number.isInteger(rails) || rails < 2) {
            throw new Error('Rails must be an integer >= 2.');
        }
        this.rails = rails;
    }
    zigzagIndices(length) {
        const indices = [];
        let rail = 0;
        let direction = 1;
        for (let i = 0; i < length; i++) {
            indices.push(rail);
            if (rail === this.rails - 1)
                direction = -1;
            else if (rail === 0)
                direction = 1;
            rail += direction;
        }
        return indices;
    }
    encrypt(text) {
        const rails = Array.from({ length: this.rails }, () => '');
        const indices = this.zigzagIndices(text.length);
        for (let i = 0; i < text.length; i++) {
            rails[indices[i]] += text[i];
        }
        return rails.join('');
    }
    decrypt(text) {
        const indices = this.zigzagIndices(text.length);
        const counts = Array(this.rails).fill(0);
        for (const r of indices)
            counts[r]++;
        const railStrings = [];
        let pos = 0;
        for (let r = 0; r < this.rails; r++) {
            railStrings.push(text.slice(pos, pos + counts[r]));
            pos += counts[r];
        }
        const railPos = Array(this.rails).fill(0);
        return indices.map((r) => railStrings[r][railPos[r]++]).join('');
    }
}
