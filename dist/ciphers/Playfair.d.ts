import { Cipher } from '../Cipher.js';
export declare class Playfair extends Cipher {
    private keyMatrix;
    constructor(key: string);
    private generateKeyMatrix;
    private findPosition;
    private prepareText;
    private processPairs;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
