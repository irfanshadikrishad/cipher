import { Cipher } from "../Cipher"
export declare class Atbash extends Cipher {
  encrypt(text: string): string
  decrypt(text: string): string
}
