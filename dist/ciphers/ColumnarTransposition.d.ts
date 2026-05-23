import { Cipher } from '../Cipher.js';
export declare class ColumnarTransposition extends Cipher {
    private key;
    constructor(key: string);
    private sortedOrder;
    encrypt(text: string): string;
    decrypt(text: string): string;
}
