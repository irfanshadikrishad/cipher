import { Cipher } from "../Cipher.js";
export declare class ADFGVX extends Cipher {
    private key;
    private codeword;
    private polybiusSquare;
    private reverseSquare;
    private adfgvx;
    constructor(key?: string, codeword?: string);
    private createPolybiusSquare;
    private columnarTranspose;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
