import { Cipher } from "../Cipher.js";
export declare class ADFGVX extends Cipher {
    private key;
    private codeword;
    private polybiusSquare;
    private reverseSquare;
    private adfgvx;
    constructor(key?: string | null, codeword?: string | null);
    private createPolybiusSquare;
    private columnarTranspose;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
