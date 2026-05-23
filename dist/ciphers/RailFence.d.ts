import { Cipher } from '../Cipher.js';
export declare class RailFence extends Cipher {
    private rails;
    constructor(rails: number);
    private zigzagIndices;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
