import { Cipher } from '../Cipher.js';
export declare class ROT13 extends Cipher {
    constructor();
    private rotate;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
