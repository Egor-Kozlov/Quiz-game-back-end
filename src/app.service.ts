import { Injectable } from '@nestjs/common';
import {randomKey} from './modules/randomKey';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomKey(): {value: number, timeOfCreation: any} {
    // return number with length of 7
    return randomKey();
  }
}
