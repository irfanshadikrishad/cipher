import { Cipher } from "../Cipher"
export declare class Playfair extends Cipher {
  private keyMatrix
  constructor(key: string)
  private generateKeyMatrix
  private findPosition
  private prepareText
  private processPairs
  encrypt(text: string): string
  decrypt(text: string): string
}
