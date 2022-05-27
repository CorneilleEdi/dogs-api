export class DogNotExistError extends Error {
    constructor(key?: string) {
        super(`Dog ${key} do not exist`);
    }
}
