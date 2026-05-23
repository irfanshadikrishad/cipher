import { Cipher } from '../Cipher.js';
export declare class Affine extends Cipher {
    private a;
    private b;
    private aInv;
    constructor(a: number, b: number);
    encrypt(text: string): string;
    decrypt(text: string): string;
}
