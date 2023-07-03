import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomKey(): number {
    // return number with length of 7
    return Math.floor(Math.random() * 10000000)
  }
}
