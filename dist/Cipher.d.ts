import { Ceaser } from "./ciphers/Ceaser.js";
export declare abstract class Cipher {
    static Ceaser: typeof Ceaser;
    abstract encrypt(text: string): string;
    abstract decrypt(text: string): string;
}
