import { NotFoundException } from '@nestjs/common';

export class DogNotFoundException extends NotFoundException {
  constructor(key?: string) {
    super(`Dog ${key} not found`);
  }
}
