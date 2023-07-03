import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomKey(): {value: number, timeOfCreation: any} {
    // return number with length of 7
    const randomKey = Math.floor(Math.random() * 10000000);
    const timeOfCreation = new Date().getTime();
    return {
      value: randomKey,
      timeOfCreation: timeOfCreation,
    };
  }
}
