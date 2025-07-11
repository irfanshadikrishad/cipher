import { Cipher } from '../Cipher.js';
export declare class Caesar extends Cipher {
    private shift;
    constructor(shift: number);
    encrypt(text: string): string;
    decrypt(text: string): string;
}
