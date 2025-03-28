import { Injectable } from '@nestjs/common';
import * as Util from '@umar-monorepo/shared/utils'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getUnicornRocket(): {message: string} {
    return {message: `hello my name is ${Util.unicornrocket}` }
  }
}
