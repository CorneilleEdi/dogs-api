import * as nanoid from "nanoid";

export class Helpers {
    static alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Check if array is empty by looking at his length
    static isEmpty(array: any): boolean {
        return !(array.length > 0);
    }

    // Generate a id
    static generateUid = (size = 22) => nanoid.customAlphabet(Helpers.alphabet, size)();
}
